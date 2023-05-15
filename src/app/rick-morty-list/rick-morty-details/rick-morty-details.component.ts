import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { RickMortyService } from 'src/app/rick-morty.service';

@Component({
  selector: 'app-rick-morty-details',
  templateUrl: './rick-morty-details.component.html',
  styleUrls: ['./rick-morty-details.component.scss']
})
export class RickMortyDetailsComponent {
  data: any;
  constructor(private rickMortyService: RickMortyService, private router: Router){}

  ngOnInit(): void {
    this.rickMortyService.characterId.subscribe((id: number) => {
      if(id){
        this.getCharacterById(id);
      }
    })
  }

  getCharacterById(id: number){
    lastValueFrom(this.rickMortyService.getCharacterById(id)).then((result: any)=>{
      this.data = result;
      console.log(this.data); 
    });
  }

  onClick(){
    this.router.navigate(['/character']);
  }
}
