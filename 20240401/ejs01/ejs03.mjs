import ejs from "ejs";
import {readFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

let user;
// user = {
//     name: "Annette Richardson",
//     img: "https://randomuser.me/api/portraits/women/60.jpg"
// };

//user被 Mark的話就表示沒有登入，有user這個資料的話就會執行

// if(user){
//     console.log(`
//     <img src="${user.img}"><span>${user.name}</span>
//     <button>登出</button>
//     `);
// }else{
//     console.log("<button>登入</button><button>註冊</button>");
// }

const template = await readFile(resolve(__dirname, "template03.html")).then(result => result.toString());
const result = ejs.render(
    template,
    {user}
);
console.log(result);

