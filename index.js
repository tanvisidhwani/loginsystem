const router = require('./routes/routes.js');
const express = require("express");

const app = express();

app.use(express.json());
console.log(router);

let arr = [1, 2, 3, 4, 5, 6];

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`port is running at ${PORT}`);
});

app.get("/", (req, res, next) => {
  console.log(req);

  // console.log(req, res);
  res.send("welcome to the root route");

  next();
});

let some_handler= (req, res) => {
  res.json(arr);
}

app.get("/getarray", some_handler);

app.post("/post", (req, res) => {
  const obj = req.body;
  console.log(obj);
  
  let keys = Object.keys(obj);
  //    console.log(keys);

  for (const key in obj) {
    arr.push(obj[key]);
    console.log(arr);
  }
  res.send("hello.post");
});

app.put("/put", (req, res) => {
  for(let elements of arr){
    let varr= elements*2;
    res.json(varr);
  }
  
  
});

app.delete("/delete", (req, res) => {
  arr = [];
  res.send(`array: ${arr} has been deleted`);
});
