import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelsewelcome',
  templateUrl: './ifelsewelcome.component.html',
  styleUrls: ['./ifelsewelcome.component.css']
})
export class IfelsewelcomeComponent {
  isLoggedIn: boolean = true;
  username: string = 'John';
}
