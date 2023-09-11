const fs = require("fs");
const Showdown = require("showdown");

const converter = new Showdown.Converter();
converter.setFlavor("github");

const README_md = fs.readFileSync("README.md", "utf-8");
const markdownHTML = converter.makeHtml(README_md);

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Markdown Previewer</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    ${markdownHTML}
  </body>
</html>
`;

fs.writeFileSync("index.html", html);
