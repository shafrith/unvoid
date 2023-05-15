import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  characterId = new BehaviorSubject<number>(0);
  constructor(private httpClient: HttpClient) { }

  url = `https://rickandmortyapi.com/api/character`;
  getCharacter(){
    
    return this.httpClient.get(this.url);
  }

  getCharacterById(id: number){
    // const url = `https://rickandmortyapi.com/api/character/${id}`;
    // console.log(url)
    return this.httpClient.get(this.url + `/${id}`);
  }
}
