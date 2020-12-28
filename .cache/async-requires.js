// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-about-js": () => import("./../../../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-my-files-js": () => import("./../../../src/pages/my-files.js" /* webpackChunkName: "component---src-pages-my-files-js" */),
  "component---src-pages-name-generator-js": () => import("./../../../src/pages/nameGenerator.js" /* webpackChunkName: "component---src-pages-name-generator-js" */),
  "component---src-pages-quote-generator-js": () => import("./../../../src/pages/quoteGenerator.js" /* webpackChunkName: "component---src-pages-quote-generator-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */)
}

