console.log("hello Repl / world / Me / By Me");

let express = require("express");
let app = express();
let port = 3000;

app.get("/", (req, res) => {
  res.send("Keshaw,you have done vercel deployment");
});

app.listen(port, () => {
  console.log(`server is running on https://localhost/${port}`);
});
