const createSlug3 = require('./createSlug3');

describe('createSlug3', () => {
  test('sostituisce gli spazi con trattini', () => {
    expect(createSlug3('Questo è un test')).toBe('questo-è-un-test');
  });
});
