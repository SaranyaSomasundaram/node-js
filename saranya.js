const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var employeDetail = [{ name: "saranya" }, { gender: "female" }, { address: "namakkal" }, { city: "tamilnadu" }]

console.log("called outer")


app.get('/saranya/sample-data', (req, res) => {
    console.log("called get method")

    res.send(JSON.stringify(employeDetail))
})


app.post('/saranya/sample-data', (req, res) => {
    console.log("called post method")

    employeDetail.push({ language: ["tamil", "english"] })
    res.send(JSON.stringify(employeDetail))
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})