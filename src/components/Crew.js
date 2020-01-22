import React, { Component } from 'react'

class Crew extends Component {

  componentDidMount() {
    setInterval(() => fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json())
      .then(data => {
        this.props.changeCrew(data.people)
      })
      .catch(error => console.log(error)), 5000)
  }

  render() {
    const crewNames = this.props.issCrew.map((item, index) => {
      return(
        <div key = { index }>
          <img src = 'http://kvartiry-v-donecke.ru/images/unnamed.jpg' />
          <h3>{ item.name }</h3>
        </div>
      )
    })

    return (
      <div className = 'Crew'>
        { crewNames }
        <h3>Total amount: { this.props.issCrew.length } people on ISS</h3>
      </div>
    )
  }
}

export default Crew
