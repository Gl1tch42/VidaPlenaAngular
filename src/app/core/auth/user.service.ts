import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    private http: HttpClient
  ) { }

  public get usuario() {
    return this._usuario.asObservable();
  }

  login(email: string, password: string) {

    let dto = {
      email: email,
      password: password
    }

    this.http.post<any>(`${environment.api}/user/login`, dto).pipe(
      distinctUntilChanged(),
      tap(user => {
        this._usuario.next(user);
        this._usuarioInfo.next(user.user2);
        this.tokenService.setToken(user.accessToken);
      })
    );
  }

  logout() {
    this.http.get<any>(`${environment.api}/user/logout`);
    this.tokenService.removeToken();
    this._usuario.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}


