const Player = require("./Player.js")




test('player function', () => {
    //create a player
     
    const player = new Player();

    expect(player.gameboard).toEqual(instanceof Gameboard)

})
