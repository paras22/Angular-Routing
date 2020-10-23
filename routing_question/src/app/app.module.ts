import { BrowserModule } from '@angular/platform-browser';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

// TODO 1: Add the following 2 routes:-
//         'home' redirecting to '' route
//         'search' pointing to the search Component
const routes: Routes = [
  { path: '', component: HomeComponent }
  ,{path : 'Home', redirectTo : "" },
  {path : 'search' , component : SearchComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
