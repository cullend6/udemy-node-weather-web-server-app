const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1d27fa248a22a3ed837e9fad43d46eed/' + longitude + ',' + latitude + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        } else if ( body.error ) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, 
                body.daily.data[0].summary + ' The temperature is ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability + '% chance of rain.'
            )
        }
    })
}

module.exports = forecast