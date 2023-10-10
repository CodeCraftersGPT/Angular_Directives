import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isAuthenticated = false;

  toggleAuthentication() {
    this.isAuthenticated = !this.isAuthenticated;
  }

}
