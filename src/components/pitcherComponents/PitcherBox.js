import React from 'react'
import './PitcherBox.css'

const PitcherBox = () => {
  return (
    <div className='container' id='box'>
      <div className='row'>
        <div className='col' id='ball-up'></div>
      </div>
      <div className='row'>
        <div className='col' id='ball-left'></div>
        <div className='col' id='strike-up-away'></div>
        <div className='col' id='strike-up-mid'></div>
        <div className='col' id='strike-up-in'></div>
        <div className='col' id='ball-right'></div>
      </div>
      <div className='row'>
        <div className='col' id='ball-left'><h6 id="leftyName">Lefty Box</h6></div>
        <div className='col' id='strike-mid-away'></div>
        <div className='col' id='strike-mid-mid'></div>
        <div className='col' id='strike-mid-in'></div>
        <div className='col' id='ball-right'><h6 id="rightyName">Righty Box</h6></div>
      </div>
      <div className='row'>
        <div className='col' id='ball-left'></div>
        <div className='col' id='strike-down-away'></div>
        <div className='col' id='strike-down-mid'></div>
        <div className='col' id='strike-down-in'></div>
        <div className='col' id='ball-right'></div>
      </div>
      <div className='row'>
        <div className='col' id='ball-down'></div>
      </div>
    </div>
  )
}

export default PitcherBox
