const Ship = require('../src/Ship.js');

test('Ship takes a hit and updates state correctly', () => {
  const ship = new Ship(3);

  // Before any hit
  expect(ship.length).toBe(3);
  expect(ship.isHit).toBe(0);
  expect(ship.sunk).toBe(false);

  ship.hit();

  // After 1st hit
  expect(ship.length).toBe(2);
  expect(ship.isHit).toBe(1);
  expect(ship.sunk).toBe(false);

  ship.hit();
  ship.hit(); // third and final hit

  // After 3 hits (should be sunk now)
  expect(ship.length).toBe(0);
  expect(ship.isHit).toBe(3);
  expect(ship.sunk).toBe(true);
});