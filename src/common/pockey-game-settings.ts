export enum BallType {
    Left = 'LeftBall',
    Right = 'RightBall',
    White = "WhiteBall",
    Puck = "Puck"
}

export enum WinStatus {
    WIN,
    LOST
}


export interface GameData {
    roundNumber: number,
    ballsNumber: number
}