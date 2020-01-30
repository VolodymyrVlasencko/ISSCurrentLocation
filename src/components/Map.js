import React, { useEffect, useState, Component } from 'react'
import { GoogleMap,
         withScriptjs,
         withGoogleMap,
         Marker } from 'react-google-maps'

const MapComponent = () => {

  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)

  const fetch_API = () => fetch('http://api.open-notify.org/iss-now.json')
    .then(res => res.json())
    .then(data => {
      setLongitude(data.iss_position.longitude)
      setLatitude(data.iss_position.latitude)
    })
    .catch(error => console.log(error))

  useEffect(() => {
    setTimeout(() => fetch_API(), 0)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => fetch_API(), 5000)
      return () => clearInterval(intervalId)
  }, [])

    return (
      <GoogleMap
        defaultZoom = { 1 }
        defaultCenter = { { lat: 0, lng: 0 } }>
        <Marker
          position = { {
            lat: parseFloat(latitude),
            lng: parseFloat(longitude)
          } }
        />
      </GoogleMap>
    )
}

const WrapedMap = withScriptjs(withGoogleMap(MapComponent))

class Map extends Component {
  render() {
    return (
      <div className = 'Map'>
        <WrapedMap
          googleMapURL = { `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_MAPS_API_KEY}` }
          loadingElement = { <div style = { { height: `100%` } } /> }
          containerElement = { <div style={ { height: `100%` } } /> }
          mapElement = { <div style={ { height: `100%` } } /> }
        />
      </div>
    )
  }
}

export default Map
