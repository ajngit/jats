import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AppTitleStrategy extends TitleStrategy {
  constructor(private title: Title, private meta: Meta) {
    super();
  }

  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if (title) {
      this.title.setTitle(title);

      const data = snapshot.root.firstChild?.data || {};

      // Description
      if (data['description']) {
        this.meta.updateTag({ name: 'description', content: data['description'] });
      }

      // Keywords
      if (data['keywords']) {
        this.meta.updateTag({ name: 'keywords', content: data['keywords'] });
      }

      // Robots
      if (data['robots']) {
        this.meta.updateTag({ name: 'robots', content: data['robots'] });
      }

      // Canonical URL
      if (data['canonical']) {
        this.setCanonicalURL(data['canonical']);
      }

      // Open Graph tags
      if (data['ogTitle']) {
        this.meta.updateTag({ property: 'og:title', content: data['ogTitle'] });
      }
      if (data['ogDescription']) {
        this.meta.updateTag({ property: 'og:description', content: data['ogDescription'] });
      }
      if (data['ogImage']) {
        this.meta.updateTag({ property: 'og:image', content: data['ogImage'] });
      }
      if (data['canonical']) {
        this.meta.updateTag({ property: 'og:url', content: data['canonical'] });
      }
    }
  }

  private setCanonicalURL(url: string) {
    let link: HTMLLinkElement|null = document.querySelector("link[rel='canonical']") || null;
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
