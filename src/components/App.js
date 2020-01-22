import React, { Component } from 'react'
import UTC from './UTC'
import Map from './Map'
import GetCrew from '../containers/GetCrew'
import GetLonLat from '../containers/GetLonLat'

export default class App extends Component {

  render() {
    return (
      <div>
        <GetLonLat />
        <UTC />
        <Map />
        <GetCrew />
      </div>
    )
  }
}
