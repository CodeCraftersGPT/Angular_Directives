import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  template:`
  <div [ngSwitch]="userType">
      <div *ngSwitchCase="'admin'">Welcome, Admin!</div>
      <div *ngSwitchCase="'user'">Hello, User!</div>
      <div *ngSwitchCase="'guest'">Welcome, Guest!</div>
      <div *ngSwitchDefault>Unknown User Type</div>
    </div>
  `,
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {
  userType = 'guest';
}
