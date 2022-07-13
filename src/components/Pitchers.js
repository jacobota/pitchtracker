import React, { Component } from 'react'
import './Pitchers.css';

export class Pitchers extends Component {
  render() {
    return (
      <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitcher View</h1>
      </div>
      <div className='d-flex justify-content-center pt-5 pb-5'>
        <button type="button" className="btn btn-outline-dark" id='button'><a href="#" className='p-4' id='buttonText'>+ ADD PITCHER</a></button>
      </div>
      <div className='d-flex justify-content-center pt-3 pb-5'>
        <h1 id='text'>Pitchers : None</h1>
      </div>
      </>
    )
  }
}

export default Pitchers
