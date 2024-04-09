import fs from "fs";

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

const numFiles = 20;

for (let i = 1; i <= numFiles; i++) {
    const fileName = `work${i}.html`;

    const htmlContent = createHtmlAndContent(i);
    fs.writeFile(fileName, htmlContent, (err) => {
        if (err) {
            console.error(`Error writing file ${fileName}:`, err);
        } else {
            console.log(`Generated HTML file: ${fileName}`);
        }
    });
}