// generate-sitemap.js

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// List of routes to include in the sitemap
const pages = [{ url: "/", changefreq: "weekly", priority: 1.0 }];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: "https://ykdromar.com" });

  const writeStream = createWriteStream(
    path.join(__dirname, "build", "sitemap.xml")
  );

  sitemap.pipe(writeStream);

  pages.forEach((page) => {
    sitemap.write(page);
  });

  sitemap.end();

  // Wait until the sitemap is fully written
  await streamToPromise(sitemap);

  console.log("Sitemap has been created!");
};

generateSitemap();
