import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FacadeService } from './facade/facade.service'
import { AuthenticationService } from './authentication/authentication.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FacadeService,
    AuthenticationService,
  ]
})
export class ServicesModule { }
