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
        let addShipCoords = this.getCoordinateList(direction, rowstart, colstart, length);

        
        //now we can 'place'
        return addShipCoords;


    }

    getCoordinateList(direction, rowstart, colstart,length) {
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
        if (!this.checkValidCoordinate(direction, rowstart,colstart,length))
        {
            return false;

        }

        //we use another function to check for valid placement once..
        if (direction == 'horizontal') {
            //return the coordinates, do not set them!
            coordinateList.push([rowstart, colstart])

            colstart++
            
        }
        else {
            //vertical
            //row+1 col <9>0
             coordinateList.push([rowstart, colstart])
             rowstart++

        }

return coordinateList
    }


    checkValidCoordinate(direction, rowstart, colstart, length)
    {
        //we are either checking vertial or horizontal
        if (direction == 'horizontal')
        {
            

            //we must check the x axis in an increasing manner
            return colstart + length <= 10 && this.checkCollision(direction,rowstart,colstart,length)
        }
        else 
        {
            //check the y
            return rowstart+length <= 10 && this.checkCollision(direction,rowstart,colstart,length)

        }


    }

        checkCollision(direction, rowstart, colstart, length)
        {
            if (direction == 'horizontal')
            {
                //ensure every cell in colstart+lenth is not occupied for horizontal ships
                for (let i = 0; i<length; i++)
                {
                    if (this.board[rowstart][colstart+i] == 'ship')
                    {
                        return false;
                    }
                }
                return true
            }
            else
            {
                              //ensure every cell in row+lenth is not occupied for vertical ships
                for (let i = 0; i<length; i++)
                {
                    if (this.board[rowstart+i][colstart] == 'ship')
                    {
                        return false;
                    }
                }
                return true
            }
           
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

//let board = new Gameboard;
//console.table(board.board)
module.exports = Gameboard;