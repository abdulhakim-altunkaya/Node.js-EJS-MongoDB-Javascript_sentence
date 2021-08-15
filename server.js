const express = require ("express");
const path = require ("path");
const connectDB = require ("./DB/connection");
const EngturModel = require("./DB/engturModel");
const TurengModel = require("./DB/turengModel");
const AboutModel = require("./DB/aboutModel");
const ModelTurGer = require("./DB/ModelTurGer");
const ModelGerTur = require("./DB/ModelGerTur");

const app = express ();
connectDB();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use("/assets", express.static("static"));


app.get("/", function(req, res){
    res.render("index");
});
app.post("/", function(req, res){
  const word1 = req.body.input1;
  const word2 = `\"${word1}\"`; /*1*/
  EngturModel.find({$text:{$search: word2}}).then(function(records){
    if (records.length == 0) { /*2*/
      TurengModel.find({$text:{$search: word2}}).then(function(records){
        if (records.length == 0) {
          res.status(404);
          res.render("error", {word1});
        } else {
          res.render("index2", {word_data: records, word1});
        };
      });
    } else {
      res.render("index2", {word_data: records, word1});
    };
  });
});

/*
1. This code lets the function to make exact phrase search. It is nice because on mongodb page, it shows how to style a string for exact phrase search not a variable. After spending hours, I could find a way to style a variable(not a string) for exact phrase search.
2. Here it is different than normal search method. In normal search method (Normal search: "input1: word2",,, Index Text Search: "$text:{$search: word2}}" ) you say records=== null to find out if records holds any value, ie if search produced any result. However, it doesnt work with Index Text Search. After spending a day and a half, I found this records.length=== method
*/
app.get("/turkish-english", function(req, res){
    res.render("indexTurEng");
});
app.post("/turkish-english", function(req, res){
  const word1 = req.body.input1;
  const word2 = `\"${word1}\"`; /*1*/
  TurengModel.find({$text:{$search: word2}}).then(function(records){
    if (records.length == 0) { /*2*/
      EngturModel.find({$text:{$search: word2}}).then(function(records){
        if (records.length == 0) {
          res.status(404);
          res.render("error", {word1});
        } else {
          res.render("indexTurEng2", {word_data: records, word1});
        };
      });
    } else {
      res.render("indexTurEng2", {word_data: records, word1});
    };
  });
});

app.get("/german-turkish", function(req, res){
  res.render("indexGerTur");
});
app.post("/german-turkish", function(req, res){
  const word1 = req.body.input1;
  const word2 = `\"${word1}\"`; /*1*/
  ModelGerTur.find({$text:{$search: word2}}).then(function(records){
    if (records.length == 0) { /*2*/
      ModelTurGer.find({$text:{$search: word2}}).then(function(records){
        if (records.length == 0) {
          res.status(404);
          res.render("errorGer", {word1});
        } else {
          res.render("indexGerTur2", {word_data: records, word1});
        };
      });
    } else {
      res.render("indexGerTur2", {word_data: records, word1});
    };
  });
});

app.get("/turkish-german", function(req, res){
  res.render("indexTurGer");
});
app.post("/turkish-german", function(req, res){
  const word1 = req.body.input1;
  const word2 = `\"${word1}\"`; /*1*/
  ModelTurGer.find({$text:{$search: word2}}).then(function(records){
    if (records.length == 0) { /*2*/
      ModelGerTur.find({$text:{$search: word2}}).then(function(records){
        if (records.length == 0) {
          res.status(404);
          res.render("errorGer", {word1});
        } else {
          res.render("indexTurGer2", {word_data: records, word1});
        };
      });
    } else {
      res.render("indexTurGer2", {word_data: records, word1});
    };
  });
});






app.get("/engtur", function(req, res){
    res.render("insertEngtur");
});
app.post("/engtur", function(req, res){
  EngturModel.create(req.body).then(function(){
    res.render("insertEngtur");
  });
});



app.get("/tureng", function(req, res){
    res.render("insertTureng");
});
app.post("/tureng", function(req, res){
  TurengModel.create(req.body).then(function(){
    res.render("insertTureng");
  });
});


app.get("/about", function(req, res, next){
  AboutModel.find({}).sort({_id:-1}).then(function(records){
    res.render("about", {personal_data: records})
  }).catch(next);
});

app.post("/about", function(req, res, next){
  AboutModel.create(req.body).then(function(){
    AboutModel.find({}).sort({_id:-1}).then(function(records){
      res.render("about", {personal_data: records})
    }).catch(next);
  });
});









const server = app.listen (process.env.PORT || 3000);
const portNumber = server.address().port;
console.log ("ГОСПОДИН ПОРТ СЕИЧАС ОТКРЫТ "+ portNumber)
