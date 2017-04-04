import { Inject, Injectable } from '@angular/core';

import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    static readonly REDIRECT_URL_KEY = 'redirectUrl';
    static readonly DEFAULT_URL = '/home';
    static readonly LOGIN_URL = '/';
    // URLs that the redirect should ignore
    static readonly BANNED_REDIRECT_URLS = ['/', '/public'];

    // switch to allow swapping between fabric8 auth and openshift authentication
    public useCustomAuth = false;

    private authUrl: string;  // URL to web api

    constructor(
    ) {
    }

    // not used - redirects page to authUrl for login
    public gitHubSignIn() {
        window.location.href = this.authUrl;
    }

    public redirectAfterLogin() {

    }

    public redirectToLogin(currentUrl: string) {

    }

    public logout() {

    }

    public login() {

    }

    public set redirectUrl(value: string) {

    }

    private get _redirectUrl(): string {
        return '';
    }

}
