import { readFile } from "fs";
import restify from "restify";
import filePath from "./path.mjs";

const server = restify.createServer({ name: "Sample" });

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.gzipResponse());
server.use(restify.plugins.queryParser());

const vendor = (path) => (req, res, next) => {
  readFile(filePath(import.meta.url, path), (err, buffer) => {
    if (err) {
      return next(err);
    }
    res.sendRaw(200, buffer, { "Content-Type": "application/javascript" });
    next();
  });
};

server.get(
  "/vendor/mithril.min.js",
  vendor(["..", "node_modules", "mithril", "mithril.min.js"])
);

server.get(
  "/vendor/ospec.js",
  vendor(["..", "node_modules", "ospec", "ospec.js"])
);

server.get(
  "/*",
  restify.plugins.serveStatic({
    directory: "./public",
    default: "index.html",
  })
);

server.on("NotFound", (req, res, err, next) => {
  let index = ["public", "index.html"];
  if (req.path().startsWith("/admin")) {
    index = ["public", "admin", "index.html"];
  }
  readFile(filePath(import.meta.url, index), (err, buffer) => {
    if (err) {
      return next(err);
    }
    res.sendRaw(200, buffer, { "Content-Type": "text/html" });
    next();
  });
});

server.listen(8000, () => {
  console.log("%s listening at %s", server.name, server.url);
});
