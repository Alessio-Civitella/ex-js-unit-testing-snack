function createSlug2(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

module.exports = createSlug2;
