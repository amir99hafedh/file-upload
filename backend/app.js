const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://amir:amir@amir.vsmdkss.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//*******************************************************************************************************
const jobRoutes = require("./routes/job");
const userRoutes = require("./routes/user");
const crasRoutes = require("./routes/craS")
const crafRoutes = require("./routes/craF")
const factureRoutes = require("./routes/facture");


app.use("/job", jobRoutes);
app.use("/auth", userRoutes);
app.use("/craS", crasRoutes );
app.use("/craF" , crafRoutes);
app.use("/facture", factureRoutes);


module.exports = app;





/*
const express = require("express");

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://amir:amir@amir.vsmdkss.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//*******************************************************************************************************
const jobRoutes = require("./routes/job");
const userRoutes = require("./routes/user");
const crasRoutes = require("./routes/craS")
const crafRoutes = require("./routes/craF")
const factureRoutes = require("./routes/facture");


app.use("/job", jobRoutes);
app.use("/auth", userRoutes);
app.use("/craS", crasRoutes );
app.use("/craF" , crafRoutes);
app.use("/facture", factureRoutes);


module.exports = app;
 */