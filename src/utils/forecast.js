const request = require('request')

const forecast = (lat,lng, callback) => {
    url =`https://api.darksky.net/forecast/485e5cc7a51ffa52b1a3c887b267546c/${lat},${lng}`
    request({url, json :true}, (error,{body}) => {
            if (error) {
                callback("Unable to connect to location services.", undefined)
            }
            else if(body.error){
                callback("Unable to find location.", undefined)
            }else{
                callback(undefined,{
                    time : body.currently.time,
                    timezone: body.timezone,
                    precipType : body.currently.precipType,
                    summary : body.currently.summary,
                    icon : body.currently.icon,
                    temp : body.currently.temperature,
                    preci : body.currently.precipProbability,
                    humidity: body.currently.humidity,
                    windSpeed: body.currently.windSpeed,
                    hourly: body.hourly
                })
            }
        })
}

module.exports = {
    forecast : forecast
}