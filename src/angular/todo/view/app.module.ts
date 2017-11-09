import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ExampleFrameComponent } from '../../example-frame.component';
import { AppComponent } from './app/app.component';
import { AddTotoComponent } from './add-todo/add-todo.component';
import { VisibleTodoListComponent } from './visible-todo-list/visible-todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLinkComponent } from './app-link/app-link.component';

@NgModule({
  declarations: [
    ExampleFrameComponent,
    AppComponent,
    AddTotoComponent,
    VisibleTodoListComponent,
    TodoComponent,
    AppFooterComponent,
    AppLinkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
