
module.exports = function(eleventyConfig) {

  const markdownIt = require('markdown-it');
  const md = new markdownIt({
    html: true
  });
  eleventyConfig.addPairedShortcode('markdown', (content) => {
    return md.render(content);
  });

  const CleanCSS = require('clean-css');
  eleventyConfig.addFilter('cssmin', function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return  {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
