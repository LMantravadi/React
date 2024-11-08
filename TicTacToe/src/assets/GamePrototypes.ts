
export  type GameTurn = {
    square: { row: number; col: number };
    player: string;
  };

  export type GameTurnsType = GameTurn[];

  export type GameBoardType = (null | string)[][];