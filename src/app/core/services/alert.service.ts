import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public timer$ = interval(1000).pipe(take(3));
  private _showAlert = new BehaviorSubject<{
    message: string;
    type: string;
  } | null>(null);
  public showAlert$ = this._showAlert.asObservable();

  public setAlert(message: string, type: string): void {
    this.timer$.subscribe(
      (value) => {
        console.log(
          'setAlert alertservice message:' + message + ' type' + type
        );
        this._showAlert.next({ message: message, type: type });
      },
      null,
      () => {
        console.log('Timer completed');
        
      }
    );
    //console.log('setAlert alertservice message:'+message+' type'+type )
    //      this._showAlert.next({message:message,type:type});
  }
}
