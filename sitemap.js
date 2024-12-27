const fs = require("fs");
const { createClient } = require("next-sanity")


const client = createClient({
  projectId: "hktnmaz3",
  dataset: "production",
  apiVersion: "2022-03-07",
  useCdn: true
});

const SITE_URL = "https://customfitboxes.com";

// Queries 
const productQuery = `*[_type == 'product']`;
const categoryQuery = `*[_type == "category"]`;
const blogsQuery = `*[_type == "blogs"]`;

async function generateSitemap() {

    const products = await client.fetch(productQuery);
    const categories = await client.fetch(categoryQuery);
    const blogs = await client.fetch(blogsQuery);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
          <loc>${SITE_URL}/</loc>
      </url>
      <url>
          <loc>${SITE_URL}/industries</loc>
      </url>
      <url>
          <loc>${SITE_URL}/contact-us</loc>
      </url>
       <url>
          <loc>${SITE_URL}/blogs</loc>
      </url>
        ${blogs?.map((item) => `
            <url>
                <loc>${SITE_URL}/blog/${item?.slug?.current}</loc>
            </url>
        `).join("")}
        ${products?.map((item) => `
            <url>
                <loc>${SITE_URL}/${item?.slug?.current}</loc>
            </url>
        `).join("")}
        ${categories?.map((item) => `
            <url>
                <loc>${SITE_URL}/category/${item?.slug?.current}</loc>
            </url>
        `).join("")}
    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();



