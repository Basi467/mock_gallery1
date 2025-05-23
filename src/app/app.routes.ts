import { Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { ExploreComponent } from './PAGES/explore/explore.component';
import { ProfileComponent } from './PAGES/profile/profile.component';
import { SingleviewComponent } from './PAGES/singleview/singleview.component';
import { Sview2Component } from './PAGES/sview2/sview2.component';

export const routes: Routes = [
     {path:'', component: HomeComponent},
    { path:"home", component: HomeComponent
    },
    {
        path:"explore", component: ExploreComponent
    },
    {
        path:"profile", component: ProfileComponent
    },
    { path: 'singleview', component: SingleviewComponent },
    {
        path: 'sview2',
        component: Sview2Component
    }
    
];
