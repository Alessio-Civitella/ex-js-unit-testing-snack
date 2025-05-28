const createSlug = require('./createSlug');

describe('createSlug', () => {
  test('restituisce una stringa in lowercase', () => {
    const result = createSlug('Hello World');
    expect(result).toBe(result.toLowerCase()); // ✅ verifica che sia tutta minuscola
  });
});
