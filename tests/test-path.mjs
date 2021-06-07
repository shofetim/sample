import o from "ospec";
import filePath from "../src/path.mjs";

o.spec("filePath", () => {
  o("filePath", () => {
    const path = filePath(import.meta.url, []);
    o(path.includes("/") || path.includes("\\")).equals(true);
  });
});
