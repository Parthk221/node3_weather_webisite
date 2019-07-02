const express = require("express") 
const hbs = require("hbs")
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const app = express()
const port = process.env.PORT || 3000

const path = require("path")

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index',{
        title : "Home",
        createdBy: "Parth Kotecha",
        showActiveHome : true
    })
})

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error : 'You need to pass an address.'
        })
    }
    geocode.geocode(req.query.address, (error, {lat,lng,address} = {}) => {
        if (error) {
            return res.send({error : error})
        }
        forecast.forecast(lat,lng, (error, {time,timezone,precipType,summary,icon, temp,preci,humidity, windSpeed, hourly}) => {
            if (error) {
                return res.send({error : error})
            }
            return res.send({time,timezone,precipType,summary, icon, address, temp, preci,humidity, windSpeed, hourly})
        })
    }) 
    
})

app.get('/about', (req,res) => {
    res.render('about',{
        title : "About",
        createdBy: "Parth Kotecha",
        showActiveAbout : true
    })
})

app.get('/help', (req,res) => {
    res.render('help',{
        title : "Help",
        createdBy: "Parth Kotecha",
        showActiveHelp : true
    })
})

app.listen(port, () => {
    console.log("Listens on port " + port)
})