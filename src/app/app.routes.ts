import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { DetailsNewsComponent } from './details-news/details-news.component';

export const routes: Routes = [
    {
        'path':'', component:HomeComponent
    },
    {
        'path':'news', component:NewsComponent
    },
    {
        'path':'details-news', component:DetailsNewsComponent
    },
];
