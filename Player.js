const Gameboard = require('./Gameboard.js')

class Player{

    constructor(type)
    {
        this.gameboard = new Gameboard();
        this.playerType = type
    }

//when we create a player, we should also create a gameboard..

}


module.exports = Player;