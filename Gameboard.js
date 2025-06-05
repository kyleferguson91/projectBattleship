class Gameboard {
    //class should create a board

    constructor() {

        this.board = this.createBoard()

}
    createBoard() {
        //return a 2d array..
        let board = [];
        for (let i = 0; i < 10; i++) {
            board[i] = [];
            for (let t = 0; t < 10; t++) {
                board[i][t] = 0;
            
            
            
            
            
            }


        }

        
        return board;

    }
}

let board = new Gameboard;
console.table(board.board)
module.exports = Gameboard;