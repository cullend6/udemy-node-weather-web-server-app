const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY3VsbGVuZDYiLCJhIjoiY2p5cDI3bnVnMWIxNTNkbG1yajd2b2pvbyJ9.vOjqt3iIG6A_F_xTMeC3aQ'
    request({ url, json: true}, (err, { body }) => {
        if ( err ) {
            callback('Unable to connect to location services!', undefined)
        } else if ( body.features.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode