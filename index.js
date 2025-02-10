const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5555;
const axios = require("axios");
const fs = require("fs");
const url = "http://website-admin.cloudairy.info";

// Set EJS as the templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Set the directory for your EJS files

// Serve static files from the 'assets' directory
app.use((req, res, next) => {
  if (Object.keys(req.query).length > 0 && !req.path.endsWith(".xml")) {
    // Redirect to /blog-detail/:slug if the blog query parameter exists
    if (req.path.includes("blog-detail")) {
      res.redirect(301, `/blog/${req.query.blog}`);
    } else {
      res.redirect(301, `/template/${req.query.template}`);
    }
  } else if (req.path.endsWith(".html")) {
    if (req.path.includes("/blog/")) {
      const newPath = req.path.replace("/blog/", "/").slice(0, -5);
      res.redirect(301, newPath);
    } else if (req.path.includes("/template/")) {
      const newPath = req.path.replace("/template/", "/").slice(0, -5);
      res.redirect(301, newPath);
    } else {
      // Redirect to the path without .html extension
      res.redirect(301, req.path.slice(0, -5));
    }
    // Redirect to the path without .html extension
  } else {
    if (
      req.path == "/blog/" ||
      req.path == "/blog/pricing" ||
      req.path == "/blog/about" ||
      req.path == "/blog/sales" ||
      req.path == "/blog/cloudchart" ||
      req.path == "/blog/privacy-policy" ||
      req.path == "/blog/template" ||
      req.path == "/blog/blog" ||
      req.path == "/blog/mind-maps" ||
      req.path == "/blog/network-diagram" ||
      req.path == "/blog/flowchart" ||
      req.path == "/blog/online-whiteboard" ||
      req.path == "/blog/version-control" ||
      req.path == "/blog/agile" ||
      req.path == "/blog/strategic-planning" ||
      req.path == "/blog/venn-diagram" ||
      req.path == "/blog/vision-boards" ||
      req.path == "/blog/uml-diagram" ||
      req.path == "/blog/architecture-diagram" ||
      req.path == "/blog/diagram-maker" ||
      req.path == "/blog/thank-you" ||
      req.path == "/blog/sitemap.xml"
    ) {
      const newPath = req.path.replace("/blog/", "/");
      res.redirect(301, newPath);
    } else if (
      req.path == "/template/" ||
      req.path == "/template/pricing" ||
      req.path == "/template/about" ||
      req.path == "/template/sales" ||
      req.path == "/template/cloudchart" ||
      req.path == "/template/privacy-policy" ||
      req.path == "/template/template" ||
      req.path == "/template/blog" ||
      req.path == "/template/mind-maps" ||
      req.path == "/template/network-diagram" ||
      req.path == "/template/flowchart" ||
      req.path == "/template/online-whiteboard" ||
      req.path == "/template/version-control" ||
      req.path == "/template/agile" ||
      req.path == "/template/strategic-planning" ||
      req.path == "/template/venn-diagram" ||
      req.path == "/template/vision-boards" ||
      req.path == "/template/uml-diagram" ||
      req.path == "/template/architecture-diagram" ||
      req.path == "/template/diagram-maker" ||
      req.path == "/template/thank-you" ||
      req.path == "/template/sitemap.xml"
    ) {
      const newPath = req.path.replace("/template/", "/");
      res.redirect(301, newPath);
    } else if (
      req.path === "/template/thank-you" ||
      req.path === "/blog/thank-you"
    ) {
      res.redirect("/thank-you");
    } else {
      next();
    }
  }
});

app.use((req, res, next) => {
  if (req.path === "/home") {
    res.redirect("/");
  }
  if (req.path === "/contact-us") {
    res.redirect("/sales");
  }
  if (req.path.endsWith(".html")) {
    res.redirect(301, req.path.slice(0, -5));
  } else {
    next();
  }
});

// Serve static files from the 'assets' directory
app.use("/assets", express.static(path.join(__dirname, "assets")));

// Route to serve the blog-detail page for any slug
// app.get('/blog/:slug', (req, res) => {
//   // Serve the single blog-detail.html page
//   res.sendFile(path.join(__dirname, 'pages', 'blog-detail.html'), (err) => {
//     if (err) {
//       res.status(404).send('Blog detail page not found');
//     }
//   });
// });

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "robots.txt"));
});

app.get("/blog/:slug", async (req, res) => {
  const slug = req.params.slug;

  try {
    // Fetch blog data from API
    const response = await axios.get(
      `http://website-admin.cloudairy.info/adminapi/v1/frontend/blog/detail/${slug}`
    );
    const blogDetail = response.data.blog;
    // console.log(blogDetail, "blogDetail");

    const imagePath = "https://cdn.cloudairy.net/image/";

    // Render the EJS template with dynamic data
    res.render("blog-detail", {
      title: blogDetail.metaTitle,
      description: blogDetail.metaDescription,
      keywords: blogDetail?.metaKeyword,
      image: blogDetail?.thumbnailImage
        ? blogDetail?.thumbnailImage?.includes("%")
          ? blogDetail?.thumbnailImage
          : encodeURI(blogDetail?.thumbnailImage)
        : "https://cloudairy-template-storage.s3.amazonaws.com/public/metaLogo.png",
      url: `https://cloudairy.com/blog/${slug}`,
      author: blogDetail?.author?.name,
      date: blogDetail?.createdAt,
      imagePath: imagePath,
      base_url: url,
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("Blog detail page not found");
  }
});

// app.get('/template/:slug', (req, res) => {
//   // Serve the single template-detail.html page
//   res.sendFile(path.join(__dirname, 'pages', 'template-detail.html'), (err) => {
//     if (err) {
//       res.status(404).send('Template detail page not found');
//     }
//   });
// });

app.get("/template/:slug", async (req, res) => {
  const slug = req.params.slug;

  try {
    // Fetch blog data from API
    const response = await axios.get(
      `http://website-admin.cloudairy.info/adminapi/v1/frontend/template/${slug}`
    );
    const templateDetail = response?.data?.data?.templateDetails;

    const imagePath = "https://cdn.cloudairy.net/image/";

    // Render the EJS template with dynamic data
    res.render("template-detail", {
      title: templateDetail?.meta_title || templateDetail?.template_name,
      description:
        templateDetail?.meta_description ||
        templateDetail?.template_description,
      keywords: templateDetail?.meta_keyword || "",
      image: templateDetail?.thumbnail_image
        ? templateDetail?.thumbnail_image?.includes("%")
          ? templateDetail?.thumbnail_image
          : encodeURI(templateDetail?.thumbnail_image)
        : "https://cloudairy-template-storage.s3.amazonaws.com/public/metaLogo.png",
      url: `https://cloudairy.com/template/${slug}`,
      imagePath: imagePath,
      base_url: url,
    });
  } catch (err) {
    console.error(err);
    res.status(404).send("Template detail page not found");
  }
});

// Default route to index.html for the root URL
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "pages", "home.html"));
  const filePath = path.join(__dirname, "pages", "home.html");

  // Check if the file exists
  fs.readFile(filePath, "utf-8", (err, html) => {
    if (err) {
      // Send 404 if the file doesn't exist
      res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
    } else {
      // Inject data into the HTML
      const serverData = { base_url: url };
      const injectedScript = `<script>window.config = ${JSON.stringify(
        serverData
      )};</script>`;

      // Replace all instances of IMAGE_PATH with the actual path
      const modifiedHtml = html
        .replace(/IMAGE_PATH/g, "https://cdn.cloudairy.net/image/") // Replace all IMAGE_PATH instances with '/assets/image/'
        .replace("</head>", `${injectedScript}</head>`); // Inject server-side data into the <head> section

      // Send the modified HTML
      res.send(modifiedHtml);
    }
  });
});

app.get("/sitemap-0.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "sitemap-0.xml"), (err) => {
    if (err) {
      res.status(404).send("Sitemap not found");
    }
  });
});

app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "sitemap.xml"), (err) => {
    if (err) {
      res.status(404).send("Sitemap not found");
    }
  });
});

app.get("/blogs/sitemap.xml", async (req, res) => {
  try {
    const response = await axios.get(
      `http://website-admin.cloudairy.info/adminapi/v1/frontend/blog/full-list?isNewsletter=false&isShow=true`
    );
    const blogs = response.data.blogs;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogs
        ?.map(
          (blog) => `
        <url>
          <loc>https://cloudairy.com/blog/${blog.uri}</loc>
          <lastmod>${blog?.createdAt}</lastmod>
          <priority>0.5</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
});

app.get("/templates/sitemap.xml", async (req, res) => {
  try {
    const response = await axios.get(`http://website-admin.cloudairy.info/adminapi/v1/frontend/template`);
    // console.log(response)
    const templates = response.data.data.resData;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${templates
        ?.map(
          (template) => `
        <url>
          <loc>https://cloudairy.com/template/${template.uri}</loc>
          <lastmod>${template?.created_at}</lastmod>
          <priority>0.5</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
});

app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "sitemap.xml"), (err) => {
    if (err) {
      res.status(404).send("Sitemap not found");
    }
  });
});

app.get("/blog/sitemap.xml", async (req, res) => {
  try {
    const response = await axios.get(
      `http://website-admin.cloudairy.info/adminapi/v1/frontend/blog/full-list?isNewsletter=false&isShow=true`
    );
    const blogs = response.data.blogs;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${blogs
        ?.map(
          (blog) => `
        <url>
          <loc>https://cloudairy.com/blog/${blog.uri}</loc>
          <lastmod>${blog?.createdAt}</lastmod>
          <priority>0.5</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;

    res.header("Content-Type", "application/xml");
    res.send(sitemap);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error generating sitemap");
  }
});

// Serve HTML files without the .html extension
// app.get("/:page", (req, res) => {
//   const page = req.params.page;
//   res.sendFile(path.join(__dirname, "pages", `${page}.html`), (err) => {
//     if (err) {
//       res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
//     }
//   });
// });

app.get("/:page", (req, res) => {
  const page = req.params.page;
  const filePath = path.join(__dirname, "pages", `${page}.html`);

  // Check if the file exists
  fs.readFile(filePath, "utf-8", (err, html) => {
    if (err) {
      // Send 404 if the file doesn't exist
      res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
    } else {
      // Inject data into the HTML
      const serverData = { base_url: url };
      const injectedScript = `<script>window.config = ${JSON.stringify(
        serverData
      )};</script>`;
      const modifiedHtml = html
        .replace(/IMAGE_PATH/g, "https://cdn.cloudairy.net/image/") // Replace all IMAGE_PATH instances with '/assets/image/'
        .replace("</head>", `${injectedScript}</head>`); // Inject server-side data into the <head> section
      res.send(modifiedHtml);
    }
  });
});

// Default route to index.html for the root URL
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "pages", "home.html"));
  const filePath = path.join(__dirname, "pages", "home.html");

  // Check if the file exists
  fs.readFile(filePath, "utf-8", (err, html) => {
    if (err) {
      // Send 404 if the file doesn't exist
      res.status(404).sendFile(path.join(__dirname, "pages", "404.html"));
    } else {
      // Inject data into the HTML
      const serverData = { base_url: url };
      const injectedScript = `<script>window.config = ${JSON.stringify(
        serverData
      )};</script>`;
      const modifiedHtml = html
        .replace(/IMAGE_PATH/g, "https://cdn.cloudairy.net/image/") // Replace all IMAGE_PATH instances with '/assets/image/'
        .replace("</head>", `${injectedScript}</head>`); // Inject server-side data into the <head> section
      res.send(modifiedHtml);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "blog.html"));
});
