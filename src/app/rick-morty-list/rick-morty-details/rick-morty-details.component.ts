import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { RickMortyService } from 'src/app/rick-morty.service';

@Component({
  selector: 'app-rick-morty-details',
  templateUrl: './rick-morty-details.component.html',
  styleUrls: ['./rick-morty-details.component.scss'],
})
export class RickMortyDetailsComponent {
  data: any;
  id: number = 0;
  constructor(
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(localStorage.getItem('id'));
    this.rickMortyService.characterId.next(this.id);
    this.rickMortyService.characterId.subscribe((id: number) => {
      localStorage.setItem('id', id.toString());
      if (id) {
        this.getCharacterById(id);
      }
    });
  }

  getCharacterById(id: number): void {
    lastValueFrom(this.rickMortyService.getCharacterById(id)).then(
      (result: any) => {
        this.data = result;
      }
    );
  }

  onClick(): void {
    this.router.navigate(['/character']);
  }
}
