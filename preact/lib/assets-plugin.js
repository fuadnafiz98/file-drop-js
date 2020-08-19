import { promises as fs } from "fs";
import { basename } from "path";

export default function assetPlugin() {
  const prefix = "asset-url:";
  let assetIdToSourceBuffer;
  return {
    name: "asset-plugin",
    buildStart() {
      assetIdToSourceBuffer = new Map();
      //      console.log("build started");
    },
    augmentChunkHash(info) {
      //     console.log("⚠ augment");
      const buffers = Object.keys(info.modules)
        .map((moduleId) => assetIdToSourceBuffer.get(moduleId))
        .filter(Boolean);

      if (buffers.length === 0) return;
      //    console.log(buffers);

      for (const moduleId of Object.keys(info.modules)) {
        const buffer = assetIdToSourceBuffer.get(moduleId);
        if (buffer) buffers.push(buffer);
      }

      const combinedBuffer =
        buffers.length === 1 ? buffers[0] : Buffer.concat(buffers);

      return combinedBuffer; //Object.keys(info.modules).map((moduleId) => console.log(moduleId));
    },
    async resolveId(id, importer) {
      if (!id.startsWith("asset-url:")) return;
      //   console.log("resolvig");
      const realId = id.slice(10);
      const resolveResult = await this.resolve(realId, importer);
      if (!resolveResult) {
        throw Error(`not found ${realId}`);
      }
      console.log("asset-url:" + resolveResult.id + ".js");
      console.log(realId);
      console.log("----");
      return prefix + resolveResult.id + ".js";
    },
    async load(id) {
      if (!id.startsWith(prefix)) return;
      //  console.log("loading");
      const realId = id.slice(prefix.length, -".js".length);
      const source = await fs.readFile(realId);
      assetIdToSourceBuffer.set(id, source);
      this.addWatchFile(realId);
      console.log(basename(realId));
      return `
        export default import.meta.ROLLUP_FILE_URL_${this.emitFile({
          type: "asset",
          source,
          name: basename(realId),
        })}
      `;
    },
  };
}

/*
import { promises as fs } from "fs";
import { basename } from "path";

const defaultOpts = {
  prefix: "asset-url",
};

export default function assetPlugin(opts) {
  opts = Object.assign({}, defaultOpts, opts);

  let assetIdToSourceBuffer;

  const prefix = opts.prefix + ":";
  return {
    name: "asset-plugin",
    buildStart() {
      assetIdToSourceBuffer = new Map();
    },
    augmentChunkHash(info) {
      // Get the sources for all assets imported by this chunk.
      console.log("chunk");
      const buffers = Object.keys(info.modules)
        .map((moduleId) => assetIdToSourceBuffer.get(moduleId))
        .filter(Boolean);

      if (buffers.length === 0) return;

      for (const moduleId of Object.keys(info.modules)) {
        const buffer = assetIdToSourceBuffer.get(moduleId);
        if (buffer) buffers.push(buffer);
      }

      const combinedBuffer =
        buffers.length === 1 ? buffers[0] : Buffer.concat(buffers);

      console.log(combinedBuffer);
      return combinedBuffer;
    },
    async resolveId(id, importer) {
      if (!id.startsWith(prefix)) return;
      console.log("resolve");
      const realId = id.slice(prefix.length);
      const resolveResult = await this.resolve(realId, importer);

      if (!resolveResult) {
        throw Error(`Cannot find ${realId}`);
      }
      // Add an additional .js to the end so it ends up with .js at the end in the _virtual folder.
      return prefix + resolveResult.id + ".js";
    },
    async load(id) {
      if (!id.startsWith(prefix)) return;
      console.log("load");
      const realId = id.slice(prefix.length, -".js".length);
      const source = await fs.readFile(realId);
      assetIdToSourceBuffer.set(id, source);
      this.addWatchFile(realId);

      return `export default import.meta.ROLLUP_FILE_URL_${this.emitFile({
        type: "asset",
        source,
        name: basename(realId),
      })}`;
    },
  };
}
*/
