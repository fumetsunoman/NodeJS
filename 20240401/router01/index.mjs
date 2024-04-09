import express from "express";
import usersRouter from "./routes/users.mjs";
import rootRouter from "./routes/root.mjs";

const app = express();

app.use(rootRouter); //當你吃到首頁的時候"/"你會吃到該路徑下的的路徑方法
app.use("/users" ,usersRouter); //當url傳送路徑讓檔案吃到"/users"時候你會吃到該路徑下的路經方法(這個的方法不是靜態檔案)


app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})





