const express = require("express");
const bodyParser = require('body-parser');
const mongo = require("mongodb").MongoClient;

const port = 3000;

const app = express();
//app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Next, we build the MongoDB server URL. If you are running the project locally, and MongoDB locally too, the URL is likely this:
const url = "mongodb://172.17.0.5";


let db, trips, expenses

mongo.connect(
  url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) {
      console.error(err)
      return
    }
    db = client.db("tripcost")
    trips = db.collection("trips")
    expenses = db.collection("expenses")
  }
)


app.get("/", (req, res) => {
  res.send("HOMEPAGE - tripcost mongodb api ...")
})

app.post("/trip", (req, res) => {

  res.json(req.body.name)
  const name = req.body.name;
  trips.insertOne({ name: name }, (err, result) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    console.log(result)
    res.status(200).json({ ok: true })

  });
})

app.get("/trips", (req, res) => {
  trips.find().toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ trips: items })
  })
})

app.post("/expense", (req, res) => {
  expenses.insertOne(
    {
      trip: req.body.trip,
      date: req.body.date,
      amount: req.body.amount,
      category: req.body.category,
      description: req.body.description,
    },
    (err, result) => {
      if (err) {
        console.error(err)
        res.status(500).json({ err: err })
        return
      }
      res.status(200).json({ ok: true })
    }
    )
})

app.get("/expenses", (req, res) => {
  expenses.find({ trip: req.body.trip }).toArray((err, items) => {
    if (err) {
      console.error(err)
      res.status(500).json({ err: err })
      return
    }
    res.status(200).json({ expenses: items })
  })
})

app.listen(port, () => console.log("Server ready"))