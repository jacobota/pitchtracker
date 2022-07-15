import React, { Component } from 'react'
import './Pitchers.css';

export class Pitchers extends Component {
  state = {
    pitchers: 0
  }

  handleClick = () => {
    let pitcherName = "John"
    console.log(pitcherName)
    console.log(this.state.pitchers)
    this.setState({ pitchers: this.state.pitchers + 1 });
  }
  render() {
    return (
      <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitcher View</h1>
      </div>
      <div className='d-flex justify-content-center pt-5 pb-5'>
        <button type="button" className="btn btn-outline-dark" id='button' onClick={ this.handleClick }><a href="#" className='p-4' id='buttonText'>+ ADD PITCHER</a></button>
      </div>
      <div className='d-flex justify-content-center pt-3'>
        <span id='pitchtext'>{ this.showPitchers() }</span>
      </div>
        <Container />
      </>
    )
  }

  showPitchers() {
    return this.state.pitchers === 0 ? 'Pitchers Tracked : None' : 'Pitchers Tracked : ' + this.state.pitchers
  }
}

const Container = () => {
  return (
    <h1>hi</h1>
  )
}

export default Pitchers
