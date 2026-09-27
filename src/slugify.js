// Turns a title into a URL slug: lowercase words joined by single hyphens.
export function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
