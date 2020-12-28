const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/pages/index.js"))),
  "component---src-pages-my-files-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/pages/my-files.js"))),
  "component---src-pages-name-generator-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/pages/nameGenerator.js"))),
  "component---src-pages-quote-generator-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/pages/quoteGenerator.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/home/bernardosequeir/bernardo-website/src/templates/blog-post.js")))
}

