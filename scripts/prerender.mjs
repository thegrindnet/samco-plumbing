import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.prerender/entry-server.js";
const file = new URL("../dist/index.html", import.meta.url);
const html = await readFile(file, "utf8");
if (!html.includes('<div id="root"></div>'))
  throw new Error("Missing prerender insertion point");
await writeFile(
  file,
  html.replace(
    '<div id="root"></div>',
    () => '<div id="root">' + render() + "</div>",
  ),
);
await rm(new URL("../.prerender", import.meta.url), {
  recursive: true,
  force: true,
});
console.log("Pre-rendered complete English demo HTML. noindex retained.");
