import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  name: string = 'John Doe';
  status: string = 'Active';
  isActive: boolean = true;
  isAdmin: boolean = true;

}
