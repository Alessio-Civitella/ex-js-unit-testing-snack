function createSlug(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-');
}

module.exports = createSlug;