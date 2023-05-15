import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../rick-morty.service';
import { lastValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rick-morty-list',
  templateUrl: './rick-morty-list.component.html',
  styleUrls: ['./rick-morty-list.component.scss'],
})
export class RickMortyListComponent implements OnInit {
  data: any;
  constructor(
    private rickMortyService: RickMortyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    lastValueFrom(this.rickMortyService.getCharacter()).then((result: any) => {
      this.data = result;
    });
  }

  onClick(id: number): void {
    this.rickMortyService.characterId.next(id);
    this.router.navigate(['/character', id]);
  }
}
