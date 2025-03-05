import { Component, Input, OnInit } from '@angular/core';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss'
})



export class AlertComponent implements OnInit {
  ngOnInit() {
    console.log(
      'Start Alert'
    );
    if(this.active === null){this.active = true}
    this.timer$.subscribe(
      (value) => {
        console.log(
          'setAlert alertservice message:'
        );
        this.active = true;
      },
      null,
      () => {
        console.log('Timer completed');
        this.active = false;
      }
    );

   }
  static readonly SUCCESS:string = 'success';
  static readonly WARNING:string = 'warning';
  static readonly ERROR:string = 'error';

  public timer$ = interval(1000).pipe(take(5));
  public active:boolean= false;
  @Input() public message:string = '';
  //@Input() public type:SUCCESS | 'warning' | 'error'  = 'success';
  @Input() public type: typeof AlertComponent.SUCCESS | typeof AlertComponent.WARNING | typeof AlertComponent.ERROR = AlertComponent.SUCCESS;
  
}
