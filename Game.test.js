const Ship = require('./Ship.js');
const Gameboard = require('./Gameboard.js')




test('Game function', () => {
    //create a ship
     
    const ship = new Ship(3);

    //noww a board
    const board = new Gameboard();

    expect(board.placeShip(ship, "horizontal",0,0)).toBe(2);
   



}
);