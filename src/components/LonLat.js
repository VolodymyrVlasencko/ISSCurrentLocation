import React, { Component } from 'react'

class LonLat extends Component {

  componentDidMount() {
    const fetch_API = () => fetch('http://api.open-notify.org/iss-now.json')
      .then(res => res.json())
      .then(data => {
        this.props.changeLongitude(data.iss_position.longitude)
        this.props.changeLatitude(data.iss_position.latitude)
      })
      .catch(error => console.log(error))
      
    setTimeout(() => fetch_API(), 0)

    setInterval(() => fetch_API(), 5000)
  }

  render() {
    return(
      <div className = 'LonLat'>
        <h2>ISS current location:</h2>
        <p>Longitude: { this.props.longitude }</p>
        <p>Latitude: { this.props.latitude }</p>
      </div>
    )
  }
}

export default LonLat
