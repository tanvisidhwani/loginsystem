const express = require('express');
const router = express.Router();

router.get("/get",()=>{
    console.log("hello.get");
})

router.post("/post",()=>{
    console.log("hello.post");
})

router.put("/put",()=>{
    console.log("hello.put");
})

router.delete("/delete",()=>{
    console.log("hello.delete");
})

module.exports = router;