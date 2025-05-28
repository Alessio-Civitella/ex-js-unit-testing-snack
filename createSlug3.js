function createSlug3(title) {
  if (typeof title !== 'string' || title.trim() === '') {
    throw new Error('Titolo non valido');
  }
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

module.exports = createSlug3;
