import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuario = new BehaviorSubject<any>(null);
  private _usuarioInfo = new BehaviorSubject<any>(null);

  constructor(
    private tokenService: TokenService,
    private http: HttpClient,
    private router: Router
  ) { }

  public get usuario() {
    return this._usuario.asObservable();
  }

  login(email: string, password: string) {

    let dto = {
      email: email,
      password: password
    }

    console.log(dto)

    let user = this.http.post<any>(`${environment.api}/user/login`, dto)
    // .pipe(
    //   distinctUntilChanged(),
    //   tap(user => {
    //     console.log(user)
    //     this._usuario.next(user);
    //     this._usuarioInfo.next(user.user2);
    //     this.tokenService.setToken(user.accessToken);
    //     if(user.accessToken) {
    //       this.router.navigate(['/curso']);
    //     }
    //   })
    // );

    user.subscribe(data => {
      console.log(data)
      this._usuario.next(data);
      this._usuarioInfo.next(data.user2);
      this.tokenService.setToken(data.accessToken);
      if (data.accessToken) {
        this.router.navigate(['/curso']);
      }
    })
  }

  logout() {
    this.http.get<any>(`${environment.api}/user/logout`);
    this.tokenService.removeToken();
    this._usuario.next(null);
    this.router.navigate(['/login']);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}


