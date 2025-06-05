class Gameboard {
    //class should create a board

    constructor() {

        this.board = this.createBoard()
        

    }

    placeShip(ship, direction, rowstart, colstart) {
        //what is involved in placing a ship?
        //we can read its length
       let length = ship.length;
        //we are either placing it horizontally or vertically..
        //lets call a direction check
        //other params above
        //return the coordinates
        let addShipCoords = this.getDirection(direction, rowstart, colstart, length);

        //now we can 'place'
        return addShipCoords;


    }

    getDirection(direction, rowstart, colstart,length) {
        //in charge of deciding horizontal/vertial ship
        //0 denotes empty, 1 denotes ship 2 denotes hit
        let results = [];

        //either we are going horizontal, or vertical
        //horizontal:
        //row col+1 (less than 9, >0)


        if (direction == 'horizontal') {
            //return the coordinates, do not set them!
            results.push([rowstart, colstart])

            colstart++
            

        }
        else {

            //vertical
            //row+1 col <9>0
             results.push([rowstart, colstart])
             rowstart++

        }

return results
    }

    createBoard() {
        //return a 2d array..
        //make a new board
        let board = [];
        for (let i = 0; i < 10; i++) {
            //make a new row
            board[i] = [];
            for (let t = 0; t < 10; t++) {
                //make a new column
                board[i][t] = 0;





            }


        }


        return board;

    }
}

let board = new Gameboard;
console.table(board.board)
module.exports = Gameboard;