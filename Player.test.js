const Player = require('./Player');
const Gameboard = require('./Gameboard');

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