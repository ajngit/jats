import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/home/service/service.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { AboutComponent } from './components/home/about/about.component';
import { GalleryComponent } from './components/home/gallery/gallery.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent 
      },
      {
        path:'service',component:ServiceComponent
      },
      {
        path:'contact',component:ContactComponent
      },
      {
        path:'about',component:AboutComponent
      },
      {
        path:'gallery',component:GalleryComponent
      },
    
];
