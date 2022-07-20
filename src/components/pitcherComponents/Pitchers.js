import React from 'react'
import './Pitchers.css'
import PitcherBox from './PitcherBox'

const Pitchers = () => {
  return (
    <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitcher View</h1>
      </div>
      <div className='pt-5 d-flex justify-content-center'>
        <button className='p-3 btn btn-light' id='button'><h1 id='buttonText'>Enter a Pitch:</h1></button>
      </div>
      <div className='pt-5 d-flex justify-content-center'>
        <PitcherBox />
      </div>
      </>
  )
}

export default Pitchers
