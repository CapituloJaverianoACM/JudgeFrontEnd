import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './core/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StandComponent } from './components/scoreboard/stand/stand.component';
import { PracticeComponent } from './components/practice/practice.component';
import { CardComponent } from './components/practice/card/card.component';
import { ProblemComponent } from './components/problem/problem.component';
import { LatexRenderDirective } from './directives/latex-render.directive';

import { ServicesModule } from './services/services.module';
import { SubmissionComponent } from './components/submission/submission.component';
import { SubmissionsComponent } from './components/submissions/submissions.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    ScoreboardComponent,
    NavbarComponent,
    StandComponent,
    PracticeComponent,
    CardComponent,
    ProblemComponent,
    LatexRenderDirective,
    SubmissionComponent,
    SubmissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ]
})
export class AppModule { }
