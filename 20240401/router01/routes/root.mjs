import express from "express";
const router = express.Router(); //創建router的方法

router.get("/", (req, res) => {
    res.send("網站首頁")
})

router.get("/about", (req, res) => {
    res.send("關於我")
})

router.get("/map", (req, res) => {
    res.send("網站地圖")
})

export default router;