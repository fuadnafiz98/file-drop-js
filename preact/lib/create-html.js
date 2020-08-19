import { readFileSync } from "fs";
import ejs from "ejs";

function generateShell(bundle, templatePath) {
  const template = readFileSync(templatePath, { encoding: "utf-8" });
  return ejs.render(template);
}

export default function createHTMLPlugin() {
  const templatePath = "./src/index.ejs";

  return {
    name: "create-html-plugin",
    buildStart() {
      // as this function name emplies, addes this file(templatePath) to the watch folder
      // i.e changing templatePath file triggers rebuild.
      this.addWatchFile(templatePath);
    },
    async generateBundle(options, bundle) {
      let genSource = await generateShell(bundle, templatePath);
      this.emitFile({
        type: "asset",
        fileName: "index.html",
        source: genSource,
      });
      // bundle["gen-html.html"] = {
      //   fileName: "gen-html.html",
      //   isAsset: true,
      //   source: await generateShell(bundle, templatePath),
      // };
    },
  };
}
