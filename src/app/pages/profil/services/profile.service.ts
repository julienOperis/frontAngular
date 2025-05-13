import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subject } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environnements/environnement';
import { Profile, ProfileRequest } from '../models/profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private _httpClient = inject(HttpClient);
  private _apiUrl: string = `${environment.apiUrl}/users`

  public getProfile$(): Observable<Profile> {
    return this._httpClient.get<Profile>(`${this._apiUrl}/profile`);
  }

  public updateProfile$(
    currentProfilRequest: ProfileRequest
  ): Observable<Profile> {
    console.log('setProfile$');
    console.log(currentProfilRequest);

    const userProfile: Profile = {
      firstName: 'operis',
      lastName: 'operis',
      email: 'julien.boulay@operis.fr',
      profilePicture: '',
      favoriteRestaurants: [],
    };

    return this._httpClient.patch<Profile>(
      `${this._apiUrl}/update`,
      { currentProfilRequest }

    );
  }
}
