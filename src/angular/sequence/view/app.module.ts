import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleFrameComponent } from '../../example-frame.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ExampleFrameComponent,
    AppComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
