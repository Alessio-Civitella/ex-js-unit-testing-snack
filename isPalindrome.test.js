const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  test('riconosce un palindromo semplice', () => {
    expect(isPalindrome('anna')).toBe(true);
  });
});
