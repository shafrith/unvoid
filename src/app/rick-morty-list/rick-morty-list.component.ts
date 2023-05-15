import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-morty-list',
  templateUrl: './rick-morty-list.component.html',
  styleUrls: ['./rick-morty-list.component.scss']
})
export class RickMortyListComponent implements OnInit{
  data: any;
  constructor(private rickMortyService: RickMortyService, private router: Router){}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    lastValueFrom(this.rickMortyService.getCharacter()).then((result: any)=>{
      this.data = result;
      console.log(this.data); 
    });
  }

  onClick(id: number){
    // console.log(id);
    // this.getCharacter(id);
    this.rickMortyService.characterId.next(id);
    this.router.navigate(['/character', id]);
  }
}
