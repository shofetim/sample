import path from "path";
import url from "url";

const filePath = (importUrl, parts) => {
  return path.join(path.dirname(url.fileURLToPath(importUrl)), ...parts);
};

export default filePath;
