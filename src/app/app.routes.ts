import { provideRouter, Routes, TitleStrategy } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/home/service/service.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { AboutComponent } from './components/home/about/about.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppTitleStrategy } from './app-title.strategy';

export const routes: Routes = [
  {
    path: '', component: HomeComponent,
    title: 'Home | Jalal Ahmed Technical Service',
    data: {
      description: 'Interior fitout, civil contracting, architectural services in UAE.',
      keywords: 'interior design, civil contracting, MEP, maintenance, architecture',
      robots: 'index, follow',
      canonical: 'https://jats-seven.vercel.app/',
      ogTitle: 'Jalal Ahmed Technical Service - Home',
      ogDescription: 'Professional interior and construction services in UAE.',
      ogImage: 'https://jats-seven.vercel.app/assets/og-home.jpg'
    }
  },
  {
    path: 'service', component: ServiceComponent,
    title: 'Service | Jalal Ahmed Technical Service',
    data: {
      description: 'Interior fitout, civil contracting, architectural services in UAE.',
      keywords: 'interior design, civil contracting, MEP, maintenance, architecture',
      robots: 'index, follow',
      canonical: 'https://jats-seven.vercel.app/',
      ogTitle: 'Jalal Ahmed Technical Service - Home',
      ogDescription: 'Professional interior and construction services in UAE.',
      ogImage: 'https://jats-seven.vercel.app/assets/og-home.jpg'
    }
  },
  {
    path: 'contact', component: ContactComponent,
    title: 'Contact | Jalal Ahmed Technical Service',
    data: {
      description: 'Interior fitout, civil contracting, architectural services in UAE.',
      keywords: 'interior design, civil contracting, MEP, maintenance, architecture',
      robots: 'index, follow',
      canonical: 'https://jats-seven.vercel.app/',
      ogTitle: 'Jalal Ahmed Technical Service - Home',
      ogDescription: 'Professional interior and construction services in UAE.',
      ogImage: 'https://jats-seven.vercel.app/assets/og-home.jpg'
    }
  },
  {
    path: 'about', component: AboutComponent,
    title: 'About | Jalal Ahmed Technical Service',
    data: {
      description: 'Interior fitout, civil contracting, architectural services in UAE.',
      keywords: 'interior design, civil contracting, MEP, maintenance, architecture',
      robots: 'index, follow',
      canonical: 'https://jats-seven.vercel.app/',
      ogTitle: 'Jalal Ahmed Technical Service - Home',
      ogDescription: 'Professional interior and construction services in UAE.',
      ogImage: 'https://jats-seven.vercel.app/assets/og-home.jpg'
    }
  },
  {
    path: 'gallery', component: GalleryComponent,
    title: 'Gallery | Jalal Ahmed Technical Service',
    data: {
      description: 'Interior fitout, civil contracting, architectural services in UAE.',
      keywords: 'interior design, civil contracting, MEP, maintenance, architecture',
      robots: 'index, follow',
      canonical: 'https://jats-seven.vercel.app/',
      ogTitle: 'Jalal Ahmed Technical Service - Home',
      ogDescription: 'Professional interior and construction services in UAE.',
      ogImage: 'https://jats-seven.vercel.app/assets/og-home.jpg'
    }
  },

];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: TitleStrategy, useClass: AppTitleStrategy },
  ]
});