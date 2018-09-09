import { Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { SignupComponent } from '../signup/signup.component';
import { ProblemasComponent } from '../problemas/problemas.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'problems', component: ProblemasComponent},
    { path: '', redirectTo: '/signup', pathMatch: 'full' }
];