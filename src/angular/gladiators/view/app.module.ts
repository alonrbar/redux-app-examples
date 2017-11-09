import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleFrameComponent } from '../../example-frame.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { GladiatorPageComponent } from './gladiatorPage/gladiatorPage.component';
import { GladiatorProfileComponent } from './gladiatorProfile/gladiatorProfile.component';

@NgModule({
  declarations: [
    ExampleFrameComponent,
    AppComponent,
    MainPageComponent,
    GladiatorPageComponent,
    GladiatorProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
