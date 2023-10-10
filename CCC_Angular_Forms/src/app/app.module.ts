import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './Components/SwitchExample/switch/switch.component';
import { UserCardComponent } from './Components/Class/user-card/user-card.component';
import { IfelsewelcomeComponent } from './Components/ifelse/ifelsewelcome/ifelsewelcome.component';
import { HighlightDirective } from './Directives/highlight.directive';
import { AuthComponent } from './Directives/structural/auth/auth.component';
import { AuthDirective } from './Directives/structural/auth.directive';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    UserCardComponent,
    IfelsewelcomeComponent,
    HighlightDirective,
    AuthComponent,
    AuthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AuthComponent]
})
export class AppModule { }
