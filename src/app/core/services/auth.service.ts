import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { Login } from '../models/user.interface';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Profile } from '../models/profile.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  private isAuthenticated = false;
  private _apiUrl: string = 'http://localhost:3000/auth'


  public userConnecte$: Subject<string> = new Subject();

  public getUser$: Observable<string> = this.userConnecte$.asObservable()

  private _token = new BehaviorSubject<string | null>(null);
  public tokenListener$ = this._token.asObservable();

  // public authentification(nomUser: string): void {
  //   // Récup?re un user en base, vérifie qu'il existe et renvoie les données du user connecté 
  //   this.userConnecte$.next(nomUser) // le user trouvé
  // }

  
  public authentification$(login: Login):Observable<Login>{
    console.log('authentification Login');
    console.log(login);    
    return this.httpClient.post<Login>("http://localhost:3000/auth/login",login)
  }

  public getProfile$():Observable<Profile>{
    console.log('get profile Login');    
    const headers = new HttpHeaders({
      'Authorization': ['Authorization', this.getToken() ?? '' ],
      'Custom-Header': 'value'
    });

    return this.httpClient.get<Profile>("http://localhost:3000/users/profile",{headers})
  }


  
  public setProfile$(profilMaj:Profile):Observable<Profile>{
    console.log('get profile Login');    
    const headers = new HttpHeaders({
      'Authorization': ['Authorization', this.getToken() ?? '' ],
      'Custom-Header': 'value'
    });

    const context = new HttpContext();
    const userProfile: Profile = {      
      firstName: 'operis',
      lastName: 'operis',
      email: 'julien.boulay@operis.fr',
      profilePicture: '',
      favoriteRestaurants: [],
    };
    console.log('this.httpClient.patch<Profile>');    
    console.log('profilMaj');    
    console.log(profilMaj);    
    return this.httpClient.patch<Profile>("http://localhost:3000/users/update",profilMaj,{headers,context})
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
