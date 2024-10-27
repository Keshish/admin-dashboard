import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureOIDC();
  }

  private configureOIDC() {
    const authConfig: AuthConfig = {
      issuer: 'https://your-oidc-provider.com', // URL of your OIDC provider
      clientId: 'your-client-id', // Client ID for your app
      redirectUri: window.location.origin + '/dashboard', // Where the user is redirected after login
      responseType: 'code', // Use 'code' for OIDC-compliant authorization code flow
      scope: 'openid profile email', // Scopes for user information
      showDebugInformation: true, // Optional: displays debug information in the console
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  // Method to initiate login
  login() {
    this.oauthService.initImplicitFlow();
  }

  // Method to log out
  logout() {
    this.oauthService.logOut();
  }

  // Check if user is logged in
  isAuthenticated(): boolean {
    return this.oauthService.hasValidAccessToken();
  }

  // Retrieve user profile information
  get userProfile() {
    return this.oauthService.getIdentityClaims();
  }
}
