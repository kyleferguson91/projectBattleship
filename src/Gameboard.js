
import Ship from './Ship.js';
export default class Gameboard {
    //class should create a board

    constructor() {

        this.board = this.createBoard()
    


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
                board[i][t] = {
                    ship: null,
                    status: 'no ship present'
                };





            }


        }


        return board;

    }

    placeShip(ship, direction, rowstart, colstart) {
        //what is involved in placing a ship?
        //we can read its length
        let length = ship.length;
        //we are either placing it horizontally or vertically..
        //lets call a direction check
        //other params above
        //return the coordinates
        let ShipCoords = this.getCoordinateList(direction, rowstart, colstart, length);
        if (!ShipCoords)
        {
            return ShipCoords;
        }
        //we can also add some logic for which ship is which players down the road here



        //coordinates are correct, lets iterate over them

        for (let i = 0; i < ShipCoords.length; i++) {

            // we are now iterating over each individual array
            //we have a [row,column format..]
            let row = ShipCoords[i][0]
            let column = ShipCoords[i][1]
               // console.log('placing ship at',rowstart,colstart, direction,length)
            this.board[row][column] = {
                ship: ship,
                status: 'untouched'
            }

        }

        return this.board;

    }

    getCoordinateList(direction, rowstart, colstart, length) {
        //in charge of producing horizontal/vertial ship
        //this should output the coordinates we need


        let coordinateList = [];
        //either we are going horizontal, or vertical
        //horizontal:
        //row col+1 (less than 9, >0)

        //wew need to iterate over these now until we reach length
        //we musn't exceed 9 or 0

        //we need only check if the coordinates are valid once
        //once we do, we will continue in only one path that has been checked for success
        if (!this.checkValidCoordinate(direction, rowstart, colstart, length)) {
            return false;

        }

        //we use another function to check for valid placement once..
        if (direction == 'horizontal') {
            //return the coordinates, do not set them!


            let counter = 0;
            while (counter < length) {
                coordinateList.push([rowstart, colstart + counter])
                counter++
            }

        }
        else {
            //vertical
            //row+1 col <9>0

            let counter = 0;
            while (counter < length) {
                coordinateList.push([rowstart + counter, colstart])
                counter++
            }

        }

        return coordinateList
    }


    checkValidCoordinate(direction, rowstart, colstart, length) {
        //we are either checking vertial or horizontal
            
        if (direction == 'horizontal') {


            //we must check the x axis in an increasing manner
            return colstart + length <= 10 && this.checkCollision(direction, rowstart, colstart, length)
        }
        else {
            //check the y
            return rowstart + length <= 10 && this.checkCollision(direction, rowstart, colstart, length)

        }


    }

    checkCollision(direction, rowstart, colstart, length) {

        if (direction == 'horizontal') {
            //ensure every cell in colstart+lenth is not occupied for horizontal ships
            for (let i = 0; i < length; i++) {
                if (this.board[rowstart][colstart + i].ship instanceof Ship) {
                    return false;
                }
            }
            return true
        }
        else {
            //ensure every cell in row+lenth is not occupied for vertical ships
            for (let i = 0; i < length; i++) {
                if (this.board[rowstart + i][colstart].ship instanceof Ship) {
                    return false;
                }
            }
            return true
        }

    }





    attack(row, col)
    {

        if (this.board[row][col].ship instanceof ship)
        {
            //call ship.hit (the cell is an instance of ship itself so call within the call)
            this.board[row][col].ship.hit()
            this.board[row][col].status = 'hit'
            //should we handle hit with the dom?


            console.log("we have a hit!")
            
            //check for loser
            if (this.checkLoser())
            {
                //we have lost, send a signal / call another function
            }
        }
        else 
        {
            //record the missed attack!
           
            this.board[row][col].status = 'miss'
            //we could look to call dom logic here?
        }
        {

        }
    }

    checkLoser()
    {
        return this.allShipsGone();
    }

    allShipsGone()
    {
        //iterate over the gameboard
        for (let i = 0; i<this.board.length; i++)
        {
            for (let t = 0; t<this.board.length; t++)
            {
                if (this.board[i][t] instanceof ship)
                {
                    return false;
                }
            }
        
        }
        return true;
    }
}
