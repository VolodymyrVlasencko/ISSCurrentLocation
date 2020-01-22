import React, { Component } from 'react'

class UTC extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let minutes, hours, date, weekday, month, year

    let Month = new Array();
    Month[0] = 'January'
    Month[1] = 'February'
    Month[2] = 'March'
    Month[3] = 'April'
    Month[4] = 'May'
    Month[5] = 'June'
    Month[6] = 'July'
    Month[7] = 'August'
    Month[8] = 'September'
    Month[9] = 'October'
    Month[10] = 'November'
    Month[11] = 'December'

    let Weekday = new Array(7);
    Weekday[0] = 'Sunday'
    Weekday[1] = 'Monday'
    Weekday[2] = 'Tuesday'
    Weekday[3] = 'Wednesday'
    Weekday[4] = 'Thursday'
    Weekday[5] = 'Friday'
    Weekday[6] = 'Saturday'

    let timeUTC = new Date()
    minutes = timeUTC.getUTCMinutes()
    hours = timeUTC.getUTCHours()
    date = timeUTC.getUTCDate()
    weekday = Weekday[timeUTC.getUTCDay()]
    month = Month[timeUTC.getUTCMonth()]
    year = timeUTC.getUTCFullYear()

    return (
      <div className = 'timeUTC'>
        <h2>Current UTC time { hours }:{ minutes }</h2>
        <p>{ weekday }, { date } { month } { year }</p>
      </div>
    )
  }
}

export default UTC
