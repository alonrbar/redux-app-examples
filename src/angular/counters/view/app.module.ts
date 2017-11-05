import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
import { ExampleFrameComponent } from '../../example-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ExampleFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
