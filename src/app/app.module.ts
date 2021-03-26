import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';
import { AppComponent } from './app.component';
import {
  FooterComponent,
  NewTodoComponent,
  TodoListComponent,
  TodoListItemComponent,
} from './todos/components';
import { TodoComponent } from './todos/containers';
import { TodosService } from './todos/services';

const routes: Routes = [
  { path: ':filter', component: TodoComponent },
  { path: '**', redirectTo: 'all', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NewTodoComponent,
    TodoListComponent,
    TodoListItemComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveComponentModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  bootstrap: [AppComponent],
  providers: [TodosService],
})
export class AppModule {}
