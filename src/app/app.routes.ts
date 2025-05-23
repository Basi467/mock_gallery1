import { Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { ExploreComponent } from './PAGES/explore/explore.component';
import { ProfileComponent } from './PAGES/profile/profile.component';
import { SingleviewComponent } from './PAGES/singleview/singleview.component';


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
    
];
