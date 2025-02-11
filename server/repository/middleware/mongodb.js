const session = require("express-session");
const mongoose = require("mongoose");
const { CheckConnection } = require("../helper/dbconnect");
const MongoDBSession = require("connect-mongodb-session")(session);

exports.SetMongo = (app) => {
  //mongodb
  mongoose.connect("mongodb://localhost:27017/InventorySystem").then((res) => {
    console.log("MongoDB Connected!");
  });

  const store = new MongoDBSession({
    uri: "mongodb://localhost:27017/InventorySystem",
    collection: "InventorySystemSessions",
  });

  //Session
  app.use(
    session({
      secret: "5L Secret Key",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );

  //Check SQL Connection
  CheckConnection();
};
