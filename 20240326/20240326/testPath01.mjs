//resovle(絕對路徑)
//join(鄉對路徑)

import {resolve ,join,sep,parse} from "path";
// console.log(resolve(import.meta.dirname,"fff.mp4"));
// console.log(sep);

console.log(parse(import.meta.filename)); //解析路徑
const path = parse(import.meta.filename);
console.log(path.name); //testPath01