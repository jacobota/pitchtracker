//Will add in future once I research and figure out more about databases and user accounts

import React, { useState } from 'react'
import "./Addpitcher.css"

const Addpitcher = () => {
    return (
        <>
        <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
          <h1 id='header'>Pitcher View</h1>
        </div>
        <div className="mt-5 pb-5 d-flex justify-content-center align-items-center container">
          <form className='p-5' id='form'>
              <label className='fs-1'>
                  Pitcher Name:
              </label>
              <input className='fs-1 ms-4' type="text"></input>
              <br></br>
              <label className='fs-1 mt-5'>
                  School/Team:
              </label>
              <input className='fs-1 ms-4' type="text"></input>
              <br></br>
              <label className='fs-1 mt-5'>
                  Throwing Arm:
              </label>
              <select className='fs-1 ms-4' onChange={this.changeHanded}>
                  <option name="righty">Righty</option> 
                  <option name="lefty">Lefty</option>
              </select>            
          </form>
        </div>
        </>
      )
}

export default Addpitcher



