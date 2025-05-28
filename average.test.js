const average = require('./average');

describe('average', () => {
  test('calcola correttamente la media di numeri positivi', () => {
    expect(average([2, 4, 6, 8])).toBe(5);
  });
});
