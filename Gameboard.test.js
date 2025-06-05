const Gameboard = require('./Gameboard.js')


test('Ship takes a hit and updates state correctly', () => {
  const board = new Gameboard();

  // board should bne initialized.
  expect(board.board[0][0]).toBe(0);
  expect(board.board[0][9]).toBe(0);
  expect(board.board[9][0]).toBe(0);
  expect(board.board[2][0]).toBe(0);
  expect(board.board[0][1]).toBe(0);


});