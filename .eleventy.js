const { DateTime } = require("luxon");
const pluginSEO = require("eleventy-plugin-seo");

/**
* This is the JavaScript code that determines the config for your Eleventy site
*
* You can add lost of customization here to define how the site builds your content
* Try extending it to suit your needs!
*/

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    // Templates:
    "html",
    "njk",
    "md",
    // Static Assets:
    "css",
    "jpeg",
    "jpg",
    "png",
    "svg",
    "woff",
    "woff2"
  ]);
  eleventyConfig.addPassthroughCopy("public");

  /* From: https://github.com/artstorm/eleventy-plugin-seo
  
  Adds SEO settings to the top of all pages
  */
  const seo = require("./src/seo.json");
 
  eleventyConfig.addPlugin(pluginSEO, seo);

  // Filters let you modify the content https://www.11ty.dev/docs/filters/
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.setBrowserSyncConfig({ ghostMode: false });

  /* Build the collection of posts to list in the site
     - Read the Next Steps post to learn how to extend this
  */
  eleventyConfig.addCollection("posts", addCollection("posts"))
  

  function addCollection(collectionName){
    return function(collection){
      const coll = collection
      .getFilteredByTag(collectionName)
      .sort((a, b) => b.data.date - a.data.date);

    // From: https://github.com/11ty/eleventy/issues/529#issuecomment-568257426 
    // Adds {{ prevPost.url }} {{ prevPost.data.title }}, etc, to our njks templates
    for (let i = 0; i < coll.length; i++) {
      const prevPost = coll[i - 1];
      const nextPost = coll[i + 1];

      coll[i].data["prevPost"] = prevPost;
      coll[i].data["nextPost"] = nextPost;
    }

    return coll;
    }
  }

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "build"
    }
  };
};
