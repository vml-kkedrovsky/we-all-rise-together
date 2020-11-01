module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addWatchTarget("./_tmp/styles.css")

  eleventyConfig.addPassthroughCopy({ "./_tmp/styles.css": "./styles.css" })

  eleventyConfig.addPassthroughCopy( "images")

  eleventyConfig.addShortcode("version", function () {
    return String(Date.now())
  })

  return {
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_includes'
    }
  }
}
