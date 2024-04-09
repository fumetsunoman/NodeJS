import ejs from "ejs";
import {readFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

const name = "Ken";
const str = "Hello !";

// console.log(`${str}, ${name}`);
const template = await readFile(resolve(__dirname, "template01.html")).then(result => result.toString());

const result = ejs.render(
    template,
    {name, str} //原來是{name:name,str:str} 因為屬性和植是相同的
);

// 樣本字面值得讀取，先以readFile的方式去讀取，然後將readFile讀取到的內容轉成字串，最後渲染到畫面上(要注意的事，正常的寫法是await要搭配async，但由於ECMAScript=>ES2020)起，JAVASCRIPT引入了"TOP-LEVEL await"的功能，意思是可以直接使用await而不需要再async函式中去執行


console.log(result);
