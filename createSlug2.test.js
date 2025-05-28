const createSlug2 = require('./createSlug2');

describe('createSlug2', () => {
  test('sostituisce gli spazi con trattini', () => {
    expect(createSlug2('Questo è un test')).toBe('questo-è-un-test');
  });
});
