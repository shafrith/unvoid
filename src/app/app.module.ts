import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RickMortyListComponent } from './rick-morty-list/rick-morty-list.component';
import { RickMortyDetailsComponent } from './rick-morty-list/rick-morty-details/rick-morty-details.component';
import { RickMortyService } from './rick-morty.service';

@NgModule({
  declarations: [
    AppComponent,
    RickMortyListComponent,
    RickMortyDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RickMortyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
