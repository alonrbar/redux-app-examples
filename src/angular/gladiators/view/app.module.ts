import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ExampleFrameComponent } from '../../example-frame.component';
import { AppComponent } from './app.component';
import { MainPageComponent } from './mainPage/mainPage.component';
import { GladiatorPageComponent } from './gladiatorPage/gladiatorPage.component';
import { GladiatorProfileComponent } from './gladiatorProfile/gladiatorProfile.component';
import { GladiatorThumbnailComponent } from './gladiatorThumbnail/gladiatorThumbnail.component';
import { ArenaPageComponent } from './arenaPage/arenaPage.component';

@NgModule({
  declarations: [
    ExampleFrameComponent,
    AppComponent,
    MainPageComponent,
    GladiatorPageComponent,
    GladiatorProfileComponent,
    GladiatorThumbnailComponent,
    ArenaPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
