import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {  
  public timer$ = interval(3000);
  private _showAlert = new BehaviorSubject<{
    message: string;
    type: string;
  } | null>(null);
  public showAlert$ = this._showAlert.asObservable();

  public setAlert(message: string, type: string, active?: boolean): void {
    
    this._showAlert.next({ message: message, type: type});
    this.timer$.subscribe(() => this._showAlert.next(null));
  }
}
