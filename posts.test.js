const { posts, findPostById } = require('./posts');

describe('findPostById', () => {
  test('restituisce il post corretto dato un id valido', () => {
    const result = findPostById(posts, 2);
    expect(result).toEqual({ id: 2, title: 'Secondo post', slug: 'secondo-post' });
  });

  test('restituisce undefined se id non trovato', () => {
    const result = findPostById(posts, 999);
    expect(result).toBeUndefined();
  });

  test('lancia errore se il primo argomento non è un array', () => {
    expect(() => findPostById(null, 1)).toThrow('Il primo argomento deve essere un array');
    expect(() => findPostById({}, 1)).toThrow('Il primo argomento deve essere un array');
  });

  test('lancia errore se l\'id non è un numero', () => {
    expect(() => findPostById(posts, '1')).toThrow('L\'id deve essere un numero');
    expect(() => findPostById(posts, null)).toThrow('L\'id deve essere un numero');
  });

  test('controlla che ogni post abbia le proprietà id, title e slug', () => {
    posts.forEach(post => {
      expect(post).toHaveProperty('id');
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('slug');
    });
  });

  test('controlla che ogni id sia un numero', () => {
    posts.forEach(post => {
      expect(typeof post.id).toBe('number');
    });
  });
});
