import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './Components/SwitchExample/switch/switch.component';
import { UserCardComponent } from './Components/Class/user-card/user-card.component';
import { IfelsewelcomeComponent } from './Components/ifelse/ifelsewelcome/ifelsewelcome.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    UserCardComponent,
    IfelsewelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [IfelsewelcomeComponent]
})
export class AppModule { }
