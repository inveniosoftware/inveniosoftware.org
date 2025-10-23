import fs from "node:fs";
import eleventySass from "@11tyrocks/eleventy-plugin-sass-lightningcss";
import eleventyNavigation from "@11ty/eleventy-navigation";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default async function (eleventyConfig) {
  // copy all `src/assets` to `_site/static"
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "assets/images" });

  // enable SASS/SCSS
  eleventyConfig.addPlugin(eleventySass);

  // navigation menu support
  eleventyConfig.addPlugin(eleventyNavigation);

  eleventyConfig.addFilter("divideArrayInParts", (arr, n) => {
    const result = Array.from({ length: n }, () => []);
    arr.forEach((item, index) => {
      result[index % n].push(item);
    });
    return result;
  });

  eleventyConfig.addFilter("sliceArray", (arr, n) => {
    const result = [];
    for (let i = 0; i < arr.length; i += n) {
      result.push(arr.slice(i, i + n));
    }
    return result;
  });

  eleventyConfig.addFilter("sortBy", (arr, field, filterField, filterValue) => {
    let result = [...arr];
    if (filterField && filterValue) {
      result = result.filter((item) => item[filterField] === filterValue);
    }
    return result.sort((a, b) => a[field].localeCompare(b[field]));
  });

  eleventyConfig.addFilter("dateFormat", (date) => {
    const d = new Date(date);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  });

  // Sort showcase items: featured first, then alphabetical, remove duplicates
  eleventyConfig.addFilter("sortShowcaseItems", (items) => {
    if (!Array.isArray(items)) return items;

    // Remove duplicates based on name and URL combination
    // const uniqueItems = items.filter((item, index, self) =>
    //   index === self.findIndex(t => t.name === item.name && t.url === item.url)
    // );

    // Sort: featured items first, then alphabetical by name
    const sorted = items.sort((a, b) => {
      // Featured items come first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      // Within same featured status, sort alphabetically by name
      return a.name.localeCompare(b.name);
    });

    return sorted;
  });

  eleventyConfig.addFilter("startswith", (input, prefix) => {
    if (typeof input !== "string" || typeof prefix !== "string") return false;
    return input.startsWith(prefix);
  });

  // Format authors array with comma separation
  eleventyConfig.addFilter("formatAuthors", (authorKeys, authorsData) => {
    if (!Array.isArray(authorKeys) || !authorsData) return "";

    const authorNames = authorKeys
      .map((key) => authorsData[key]?.name)
      .filter((name) => name); // Remove empty names

    return authorNames.join(", ");
  });

  // RSS feed
  eleventyConfig.addPlugin(pluginRss, {
    htmlBasePluginOptions: {
      baseHref: "",
    },
  });

  // embed SVGs
  eleventyConfig.addShortcode("svgImg", async (filepath) => {
    return fs.readFileSync(`src/${filepath}`, "utf8");
  });
}

export const config = {
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],
  markdownTemplateEngine: "liquid",
  dataTemplateEngine: "liquid",
  htmlTemplateEngine: "liquid",
  dir: {
    input: "src",
    includes: "_includes",
    data: "_data",
    output: "_site",
  },
};
