const request = require('request')

const geocode = (address, callback) =>{
    var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBydNRW1VOiAAtuqhxCC8OE7xQJA8LOUPo`
    request({url,json: true}, (error, {body} = {}) => {
        if (error) {
            // console.log()
            callback("Unable to connect to weather services.", undefined)
        }else if(body.status === "ZERO_RESULTS"){
            // console.log()
            callback("Invalid address input.", undefined)
        }else{
            callback(undefined,{
                address : body.results[0].formatted_address,
                lat : body.results[0].geometry.location.lat,
                lng : body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = {
    geocode : geocode
}