
import Player from './Player.js';
import Ship from './Ship.js';
import {startUI} from './domScript.js';






document.addEventListener("DOMContentLoaded", () => {
const player = new Player("human");
const computer = new Player("computer");

  startUI(player, computer);
});