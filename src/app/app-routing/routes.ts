import { Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { SignupComponent } from '../signup/signup.component';
import { ProblemDescriptionComponent } from '../problem-description/problem-description.component';

export const routes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'problem/:id', component: ProblemDescriptionComponent },
    { path: '', redirectTo: '/signup', pathMatch: 'full' }
];