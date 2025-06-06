
import Player from './Player.js';
import Ship from './Ship.js';
import {startUI} from './domScript.js';






document.addEventListener("DOMContentLoaded", () => {
const player = new Player("human");
const computer = new Player("computer");
const ship = new Ship(3)

computer.gameboard.placeShip(ship, "vertical", 3,3)
console.log(computer.gameboard.board)
startUI(player, computer);
});