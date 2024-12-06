// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { LoginService } from '../services/login-service/auth.service'; // Your auth service
// import { Configuration, BaseAPI } from '../../@api/STA'; // Adjust imports from generated API
//
// @Injectable({
//   providedIn: 'root',
// })
// export class ApiWrapper<ApiType extends BaseAPI> {
//   private readonly apiInstance: ApiType;
//
//   constructor(
//     private authService: LoginService,
//     private http: HttpClient,
//     ApiTypeClass: new (configuration: Configuration, http: HttpClient) => ApiType
//   ) {
//     const config = this.initConfig();
//     this.apiInstance = new ApiTypeClass(config, this.http);
//   }
//
//   private initConfig(): Configuration {
//     const accessToken = this.authService.getAccessToken(); // Adjust for your auth logic
//     return new Configuration({
//       accessToken,
//     });
//   }
//
//   public getApiInstance(): ApiType {
//     return this.apiInstance;
//   }
//
//   public async load(
//     apiCaller: () => Promise<any>,
//     errorResponseAction?: (error: HttpErrorResponse) => void,
//     noResponseAction?: () => void
//   ): Promise<void> {
//     try {
//       await apiCaller();
//     } catch (error) {
//       if (error instanceof HttpErrorResponse) {
//         if (error.status) {
//           console.error(`Error response for ${this.apiInstance.constructor.name}:`, error.message);
//           errorResponseAction && errorResponseAction(error);
//         } else {
//           console.error(`No response from backend.`);
//           noResponseAction && noResponseAction();
//         }
//       } else {
//         console.error('Unknown API error', error);
//         throw error;
//       }
//     }
//   }
// }
