export class Game {

    public GameId: number;
    public GameName: string;
    public Player1: string ;
    public Player2: string;
    public Winner: string;
  
  
    constructor(GameId?: number, GameName?: string, Player1?: string, Player2?: string, Winner?: string) {
      this.GameId = GameId;
      this.GameName = GameName;
      this.Player1 = Player1;
      this.Player2 = Player2;
      this.Winner = Winner;
    }
  }
  