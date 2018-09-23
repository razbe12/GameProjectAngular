import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Game } from '../models/game.model';
import { GameService } from '../sharedServices/game.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  game: Game = new Game();

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let objSearchParams: Game = new Game(
      form.controls['gameId'].value,
      form.controls['gameName'].value,
      form.controls['player1'].value,
      form.controls['player2'].value,
      form.controls['winner'].value
    )
    this.gameService.searchGames(objSearchParams);
  }

}