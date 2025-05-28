const posts = [
  { id: 1, title: 'Primo post', slug: 'primo-post' },
  { id: 2, title: 'Secondo post', slug: 'secondo-post' },
  { id: 3, title: 'Terzo post', slug: 'terzo-post' },
];

function findPostById(postsArray, id) {
  if (!Array.isArray(postsArray)) {
    throw new Error('Il primo argomento deve essere un array');
  }
  if (typeof id !== 'number') {
    throw new Error('L\'id deve essere un numero');
  }
  return postsArray.find(post => post.id === id);
}

module.exports = { posts, findPostById };
