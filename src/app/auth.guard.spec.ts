// import { TestBed } from '@angular/core/testing';
// import { AuthGuard } from './auth.guard';
// import { Router } from '@angular/router';
// import { of } from 'rxjs';
//
// describe('AuthGuard', () => {
//     let guard: AuthGuard;
//     let routerSpy = { navigate: jasmine.createSpy('navigate') };
//
//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             providers: [
//                 AuthGuard,
//                 { provide: Router, useValue: routerSpy },
//             ],
//         });
//         guard = TestBed.inject(AuthGuard);
//     });
//
//     afterEach(() => {
//         localStorage.clear(); // Clear localStorage after each test
//     });
//
//     it('should be created', () => {
//         expect(guard).toBeTruthy();
//     });
//
//     it('should allow access when user is authenticated', () => {
//         localStorage.setItem('userToken', 'test-token'); // Set mock token
//         expect(guard.canActivate()).toBeTrue();
//     });
//
//     it('should deny access and redirect to login when user is not authenticated', () => {
//         localStorage.removeItem('userToken'); // Ensure no token is present
//         expect(guard.canActivate()).toBeFalse();
//         expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
//     });
// });
