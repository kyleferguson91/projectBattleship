const Ship = require('./Ship.js');
const Gameboard = require('./Gameboard.js')




test('Game function', () => {
    //create a ship
     
    const ship = new Ship(3);

    //noww a board
    const board = new Gameboard();


    

    //can we output a change of coords?
    expect(board.placeShip(ship, "horizontal",3,1)).toEqual(false);


}
);