import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // Get the auth token from the service.
        const authToken = this.authenticationService.token;
        if (authToken === null) {
            return next.handle(req);
        }
        const authReq = req.clone({ setHeaders: { Authorization: 'Token ' + authToken } });
        return next.handle(authReq);
    }
}
