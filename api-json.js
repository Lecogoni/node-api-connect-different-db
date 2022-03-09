var fs = require('fs');
const express = require('express')
const app = express()
const parkings = require('./parkings.json')


// Middleware on peut utiliser aussi body-parser 
app.use(express.json())

app.get('/', (req,res) => {
    res.send("HOMEPAGE - not used in API ...")
})

app.get('/info', (req,res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(fs.readFileSync('package.json'));
})

app.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})
app.get('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const parking = parkings.find(parking => parking.id === id)
    res.status(200).json(parking)
})
app.post('/parkings', (req,res) => {
    parkings.push(req.body)
    res.status(200).json(parkings)
})
app.put('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parking.name =req.body.name,
    parking.city =req.body.city,
    parking.type =req.body.type,
    res.status(200).json(parking)
})

app.delete('/parkings/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let parking = parkings.find(parking => parking.id === id)
    parkings.splice(parkings.indexOf(parking),1)
    res.status(200).json(parkings)
})

app.listen(8080, () => {
    console.log('runnig at http://localhost:8080')
  })