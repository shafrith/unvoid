import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickMortyListComponent } from './rick-morty-list/rick-morty-list.component';
import { RickMortyDetailsComponent } from './rick-morty-list/rick-morty-details/rick-morty-details.component';

const routes: Routes = [
  {path: 'character', component: RickMortyListComponent},
  {path: 'character/:id', component: RickMortyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
