import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FacadeService } from './facade/facade.service';
import { AuthenticationService } from './authentication/authentication.service';

import { httpInterceptorProviders } from './http-interceptors/httpInterceptors';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FacadeService,
    AuthenticationService, // TODO - I think i can delete this line
    httpInterceptorProviders
  ]
})
export class ServicesModule { }
