// src/index.ts
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
function getBwGraphicsPath() {
  return resolve(dirname(fileURLToPath(import.meta.url)), "..", "resources");
}
export {
  getBwGraphicsPath
};
//# sourceMappingURL=index.js.map