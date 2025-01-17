import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, Subject, map } from 'rxjs';
import { Register } from '../interfaces/register';
import { Response } from '../interfaces/response';
import { Login } from '../interfaces/login';
import { TokenModel } from '../interfaces/token-model';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthsService {

  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient, private router: Router, private socialAuthServiceConfig: SocialAuthService) { }
  tokenKey = "token"

  register(data: Register): Observable<Response> {
    return this.http.post<Response>(`${this.apiUrl}Auth/Register`, data).pipe(
      map((response) => {
        console.log(response)
        if (response.isSuccess == true) {
          console.log("Registered");
        }
        this.router.navigateByUrl('/register')
        return response;
      })
    );
  }

  login(data: Login): Observable<TokenModel> {
    console.log("Hi!")
    return this.http.post<TokenModel>(`${this.apiUrl}Auth/Login`, data).pipe(
      map((response) => {
        if (response.isSuccess) {
          //localStorage.clear();
          localStorage.setItem(this.tokenKey, response.token)
        }
        this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/home']);
            setTimeout(() => {
            window.location.reload();
            }, 1);
        });

        return response;
      })
    );
  }

  logOut() {
    localStorage.removeItem(this.tokenKey);
  }

  isAuthorized() {
    var token = localStorage.getItem(this.tokenKey);
    if (token == null || token == "") {
      return false;
    }
    return true;
  }


  signInWithGoogle(): void {
    console.log("here!")
    this.socialAuthServiceConfig.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((user: SocialUser) => {
        this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
      })
      .catch(error => {
        console.error('Error signing in with Google', error);
      });
  }

  signInWithFacebook(): void {
      this.socialAuthServiceConfig.signIn(FacebookLoginProvider.PROVIDER_ID).then((user: SocialUser) => {
        this.sendTokenToAPI(user.provider, user.id, user.email, user.firstName, user.lastName, user.photoUrl);
      });
  }

  sendTokenToAPI(provider: string, providerKey: string, email: string, firstName: string, lastName: string, photoUrl: string): void {
    console.log("Well!")
      this.http.post<any>(`${this.apiUrl}Auth/ExternalLogin`, { provider, providerKey, email, firstName, lastName, photoUrl }).subscribe(
        response => {
          if (response.isSuccess) {
            //localStorage.clear();
            localStorage.setItem(this.tokenKey, response.token)
          }
          this.router.navigateByUrl('/home', { skipLocationChange: true }).then(() => {
            this.router.navigate(['/home']);
              setTimeout(() => {
              window.location.reload();
              }, 1);
          });
        },
        error => {
          console.error('Error sending token', error);
          // Handle error if needed
        }
      );
  }
  

  public signOutExternal = () => {
    this.socialAuthServiceConfig.signOut();
  }
}
