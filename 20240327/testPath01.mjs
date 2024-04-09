import {join,resolve,sep,parse,dirname,basename,extname} from "path";
import {fileURLToPath} from "url"


console.log(basename(import.meta.filename));
console.log(extname(import.meta.filename));

// node v20.11.11.1 開始有 meta下的filename 和 dirname
// 在此之前 ESM 要使用 __dirname 要用底下這個方向取得
// const __filename = fileURLToPath(import.meta.url);
// console.log(__filename);
// const __dirname = dirname(__filename);
// console.log(__dirname);

// console.log(parse(import.meta.url));
// console.log(parse(import.meta.filename))

// 斜線方向
// console.log(sep);

// console.log(join(".","test"));
// console.log(resolve(".","test"));

// console.log(join("/test"));
// console.log(resolve("/test"));

// console.log(join(import.meta.dirname,"test"));
// console.log(resolve(import.meta.dirname,"test"));

// console.log(import.meta.url);
// console.log(import.meta.filename);
// console.log(import.meta.dirname);

