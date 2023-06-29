
const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors({
    origin: 'http://127.0.0.1:63342',
}))
// app.get("/data", (req,res) => {
//     res.json({name: "Kyle", favoriteFood: "Rice"})
// })



const url = 'https://api.stlouisfed.org/fred/series/observations?series_id=MSPUS&api_key=498e4ed18f85b0be8806fbc2e2618172&file_type=json';
// const corsProxyUrl = 'https://cors-anywhere/herokuapp.com/';
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });

app.listen(3000)