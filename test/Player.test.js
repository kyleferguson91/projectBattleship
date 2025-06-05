const Player = require('../src/Player.js');
const Gameboard = require('../src/Gameboard.js');

describe('Player class', () => {
  
  test('should create a Player instance with the correct type', () => {
    const player = new Player('human');
    expect(player.playerType).toBe('human');
  });

  test('should initialize with a Gameboard instance', () => {
    const player = new Player('AI');
    expect(player.gameboard).toBeInstanceOf(Gameboard);
    expect(player.gameboard.board[0][0]).toBe(0)
  });

});