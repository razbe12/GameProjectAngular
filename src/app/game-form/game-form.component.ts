import { GameService } from './../sharedServices/game.service';
import { Game } from "./../models/game.model";
import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-game-form",
  templateUrl: "./game-form.component.html",
  styleUrls: ["./game-form.component.css"]
})
export class GameFormComponent implements OnInit, OnDestroy {
  selectedGame: Game = new Game();
  statusMessage: string;
  SelectedGameSubscription: Subscription;
  form: NgForm;
  requestType: boolean;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.SelectedGameSubscription = this.gameService.getSelectedGame().subscribe(game => { this.selectedGame = game; });
  }

  ngOnDestroy() {
    this.SelectedGameSubscription.unsubscribe();
  }

  onSubmit(form: NgForm) {
    this.form = form;
    if (this.requestType === true) {
      this.gameService.deleteGame(form.controls['gameId'].value).subscribe(
        (value) => this.statusMessage = value.toString(),
        (error) => this.statusMessage = error.statusText,
        () => this.gameService.updateGameList())
    } else {
      let inputGame: Game = new Game(
        form.controls['gameId'].value,
        form.controls['gameName'].value,
        form.controls['player1'].value,
        form.controls['player2'].value,
        form.controls['winner'].value
      )
      console.log(inputGame);
      this.gameService.updateGame(inputGame.GameId, inputGame).subscribe(
        (value) => this.statusMessage = value.toString(),
        (error) => this.statusMessage = error.statusText,
        () => this.gameService.updateGameList());
    }
  }

  updateGameList() {
    this.statusMessage = "";
    this.gameService.updateGameList();
  }

  deleteGame() {
    this.requestType = true;
  }

  putGame() {
    this.requestType = false;
  }

}
