import { GameService } from "./../sharedServices/game.service";
import { Game } from "./../models/game.model";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

@Component({
  selector: "app-game-table",
  templateUrl: "./game-table.component.html",
  styleUrls: ["./game-table.component.css"]
})
export class GameTableComponent implements OnInit {
  games: Game[];

  GameListSubscription: Subscription;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.updateGameList();
    this.GameListSubscription = this.gameService.getGameList().subscribe(games => { this.games = games; });
  }
  ngOnDestroy() {
    this.GameListSubscription.unsubscribe();
  }

  rowClick(game: Game) {
    this.gameService.setSelectedGame(game);
  }
}
