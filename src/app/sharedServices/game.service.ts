import { NgForm } from '@angular/forms';
import { Game } from './../models/game.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games: Game[] = [];

  private SelectedGameSubject = new Subject<Game>();
  private GamesSubject = new Subject<Game[]>();

  constructor(private http: HttpClient) { }

  setSelectedGame(game: Game) {
    this.SelectedGameSubject.next(Object.assign({}, game));
  }

  getSelectedGame(): Observable<Game> {
    return this.SelectedGameSubject.asObservable();
  }

  updateGameList() {
    this.http.get<Game[]>("http://localhost:30494/api/game").subscribe((data) => {
      this.GamesSubject.next(data);
    })
  }

  getGameList(): Observable<Game[]> {
    return this.GamesSubject.asObservable();
  }

  deleteGame(id: number) {
    return this.http.delete('http://localhost:30494/api/game/delete/' + id);
  }

  updateGame(id: number, game: Game) {
    console.log("Here");
    return this.http.put('http://localhost:30494/api/game/edit/' + id, game);
  }
  searchGames(gameParams: Game) {
    let params = new HttpParams();
    Object.keys(gameParams).forEach(
      function (key) {
        console.log(key + " " + gameParams[key])
        if (gameParams[key] !== undefined && gameParams[key] !== "") {
          params = params.append(key, gameParams[key]);
        }
      }
    );
    this.http.get<Game[]>('http://localhost:30494/api/game/search', { params }).subscribe(
      (data) => {
        this.GamesSubject.next(data);
      },
      () => {
        this.GamesSubject.next(this.games);
      }
    );
  }
}
