import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { Login } from '../models/user.interface';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Profile, ProfileRequest } from '../../pages/profil/models/profile.model';
import { environment } from '../../../environnements/environnement';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private isAuthenticated = false;
  private _apiUrl: string = `${environment}/auth`


  public userConnecte$: Subject<string> = new Subject();

  public getUser$: Observable<string> = this.userConnecte$.asObservable()

  private _token = new BehaviorSubject<string | null>(null);
  public tokenListener$ = this._token.asObservable();

  // public authentification(nomUser: string): void {
  //   // R�cup?re un user en base, v�rifie qu'il existe et renvoie les donn�es du user connect� 
  //   this.userConnecte$.next(nomUser) // le user trouv�
  // }

  
  public authentification$(login: Login):Observable<Login>{
    return this.httpClient.post<Login>(`${this._apiUrl}/login`,login)
  }

  public getToken():string | null {
    return localStorage.getItem('token');
  }
  
    //Subject en observable

  
  public setToken(token:string):void{
    this._token.next(token);
    localStorage.setItem('token',token);         
  }
  
  public removeToken():void{    
    localStorage.removeItem('token');
    this._token.next(null);
  }

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.removeToken();
  }

  public userIsAuthenticated(): boolean {
    return !!this.getToken();
  }


 

}
