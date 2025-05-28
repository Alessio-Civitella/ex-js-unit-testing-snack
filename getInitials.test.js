const getInitials = require('./getInitial.js');

describe('getInitials', () => {
  test('restituisce le iniziali di un nome completo semplice', () => {
    expect(getInitials('Mario Rossi')).toBe('MR');
  });
});

