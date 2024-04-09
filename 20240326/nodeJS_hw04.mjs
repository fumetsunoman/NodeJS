import fs from "fs";
import path from "path";

const dir = './zero';

// 先判斷有沒有這個資料夾
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

function createHtmlAndContent(i) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
    </head>
    <body>
            <h1>這是第${i}個HTML檔</h1>
    </body>
    </html>`;
}

for(let i = 1; i <= 20; i++){
    try {
        const paddedIndex = i < 10 ? `0${i}` : `${i}`;
        const fileName = `work${paddedIndex}.html`;
        const filePath = path.join(dir, fileName);
        fs.writeFileSync(filePath, createHtmlAndContent(i));
        console.log(`${fileName} 寫入成功`);
    } catch (error) {
        console.log('寫入失敗:', error);
    }
}

console.log('文件寫入成功！');