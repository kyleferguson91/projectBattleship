const Gameboard = require('./Gameboard.js')

class Player{

    constructor(type)
    {
        this.gameboard = new Gameboard();
        this.playerType = type
    }

    
}


module.exports = Player;