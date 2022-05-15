let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://amit:happy@cluster0.wrjrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const Application = mongoose.model("Application", {
  name: String,
  email: String,
  phone: String,
  address:String,
  semester:String,
});

let app = express();

let PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.post("/submit", function (req, res) {
  console.log(req.body);
  let application = new Application(req.body);

  application
    .save()
    .then((response) => res.send("Submited"))
    .catch((error) => res.sendStatus(501));
});

app.get("/", function (req, res) {
  res.send("Working");
});

app.get("/application", function (req, res) {
  Application.find()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.sendStatus(501));
});

app.listen(PORT,function(){
 console.log("port start on 8000");
});
  

