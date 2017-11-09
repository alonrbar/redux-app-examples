import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleFrameComponent } from '../../example-frame.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { GladiatorPageComponent } from './gladiatorPage/gladiatorPage.component';

@NgModule({
  declarations: [
    ExampleFrameComponent,
    AppComponent,
    MainPageComponent,
    GladiatorPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
