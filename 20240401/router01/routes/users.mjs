import express from "express";

const router = express.Router(); 

router.get("/", (req, res) => {
    res.send("使用者列頁面")
})

router.get("/:id", (req, res) => {
    res.send(`使用者 ${req.params.id} 的個人頁`)
})

router.get("/:id/form", (req, res) => {
    res.send(`使用者 ${req.params.id} 的個人頁 - 修改`)
})

router.post("/:id/form", (req, res) => {
    res.send(`使用者 ${req.params.id} 的個人頁 - 進入修改`)
})


export default router; //將router匯出 index.mjs接收，將接收的路由方法讓變數userRouter去接收