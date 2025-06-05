const Ship = require('../src/Ship.js');
const Gameboard = require('../src/Gameboard.js')




test('Game function', () => {
    //create a ship
     
    const ship = new Ship(3);

    //noww a board
    const board = new Gameboard();


    

    //can we output a change of coords?
board.placeShip(ship, "horizontal", 3, 1)

expect(board.board[3][1]).toEqual(ship);
board.attack(3,1);
board.attack(3,2);
board.attack(3,3);
expect(board.board[3][1]).toEqual('shiphit');
expect(board.board[3][2]).toEqual('shiphit');
expect(board.board[3][3]).toEqual('shiphit');
expect(ship.isSunk()).toEqual(true)
expect(board.checkLoser()).toEqual(true)

})
