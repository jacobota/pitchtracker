import React, { useState } from 'react'
import './Pitchers.css'
import PitcherBox from './PitcherBox'
import PitcherStats from'./PitchStats'

const Pitchers = () => {
  //set states that will be used
  const [fastballObject, setFastballObject] = useState({ type: 'Fastball', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0})
  const [breakingObject, setBreakingObject] = useState({ type: 'Breakingball', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0 })
  const [offSpeedObject, setoffSpeedObject] = useState({ type: 'Offspeed', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0 })
  const [pitchType, setPitchType] = useState(['','Fastball', 'Breakingball', 'Offspeed'])
  const [pitchTypeOnFilter, setPitchTypeOnFilter] = useState(['', 'Fastball', 'Breakingball', 'Offspeed'])
  const [pitchSelect, setPitchSelect] = useState("")
  const [pitchSelectLocation, setPitchSelectLocation] = useState("")
  const [pitchFilter, setPitchFilter] = useState("")
  const [pitchLocation, setPitchLocation] = useState(['', 'Ball-Up', 'Ball-Lefty', 'Ball-Righty', 'Ball-Down', 'Strike-Up-Away', 'Strike-Up-Mid', 'Strike-Up-In', 'Strike-Mid-Away', 'Strike-Mid-Mid', 'Strike-Mid-In', 'Strike-Down-Away', 'Strike-Down-Mid', 'Strike-Down-In'])
  const [numPitches, setNumPitches] = useState(1)

  //functions
  const changeSelectedPitch = (e) => {
    setPitchSelect(e.target.value)
  }

  const changeSelectedLocation = (e) => {
    setPitchSelectLocation(e.target.value)
  }

  const changePitchFilter = (e) => {
    setPitchFilter(e.target.value)
  }

  //handles the pitch type and location and from there spits out what kind of pitch it is 
  const handleInput = () => {
    if(pitchSelect == '') {
      alert("Enter a value for pitch type")
      return
    }
    else if(pitchSelectLocation == '') {
      alert("Enter a value for pitch location")
      return
    }
    else if(pitchSelect == pitchType[1]) {
      //fastballs
      if(pitchSelectLocation == pitchLocation[1]) {
        fastballObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        fastballObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        fastballObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        fastballObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        fastballObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        fastballObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        fastballObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        fastballObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        fastballObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        fastballObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        fastballObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        fastballObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        fastballObject.strikeDownIn++
      }
      fastballObject.thrown++
      setNumPitches(numPitches + 1)
    } else if(pitchSelect == pitchType[2]) {
      //breaking balls
      if(pitchSelectLocation == pitchLocation[1]) {
        breakingObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        breakingObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        breakingObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        breakingObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        breakingObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        breakingObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        breakingObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        breakingObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        breakingObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        breakingObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        breakingObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        breakingObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        breakingObject.strikeDownIn++
      }
      breakingObject.thrown++
      setNumPitches(numPitches + 1)
    } else if(pitchSelect == pitchType[3]) {
      //offspeed
      if(pitchSelectLocation == pitchLocation[1]) {
        offSpeedObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        offSpeedObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        offSpeedObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        offSpeedObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        offSpeedObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        offSpeedObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        offSpeedObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        offSpeedObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        offSpeedObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        offSpeedObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        offSpeedObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        offSpeedObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        offSpeedObject.strikeDownIn++
      }
      offSpeedObject.thrown++
      setNumPitches(numPitches + 1)
    }
    let fastballPerc = fastballObject.thrown / numPitches
    fastballObject.percent = fastballPerc
    let offSpeedPerc = offSpeedObject.thrown / numPitches
    offSpeedObject.percent = offSpeedPerc
    let breakingPerc = breakingObject.thrown / numPitches
    breakingObject.percent = breakingPerc
  }

  let displayFastball = pitchFilter == pitchTypeOnFilter[1]
  let displayBreaking = pitchFilter == pitchTypeOnFilter[2]
  let displayOffSpeed = pitchFilter == pitchTypeOnFilter[4]

  return (
    <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitcher View</h1>
      </div>
      <div className='mt-5 p-5 d-flex flex-column align-items-center justify-content-center container' id='textContainer'>
        <label className='mb-5' id='labels'>Pitch Type:
        <select className='ms-3' value={pitchSelect} onChange={changeSelectedPitch}>
          {pitchType.map((type) => {
            return <option id={type}>{type}</option>
          })}
        </select>
        </label>
        <label className='mb-5' id='labels'>Pitch Location:
        <select className='ms-3' value={pitchSelectLocation} onChange={changeSelectedLocation}>
          {pitchLocation.map((location) => {
            return <option id={location}>{location}</option>
          })}
        </select>
        </label>
        <button className='p-3 btn btn-light' id='button' onClick={handleInput}><h1 id='buttonText'>Enter Pitch</h1></button>
      </div>
      <div className='pt-5 d-flex justify-content-center'>
        {displayFastball && <PitcherBox pitchType={fastballObject}/>}
        {displayBreaking && <PitcherBox pitchType={breakingObject}/>}
        {displayOffSpeed && <PitcherBox pitchType={offSpeedObject}/>}
        </div>
      <div className=' mt-5 p-5 d-flex justify-content-center container'>
        {displayFastball && <PitcherStats pitchType={fastballObject}/>}
        {displayBreaking && <PitcherStats pitchType={breakingObject}/>}
        {displayOffSpeed && <PitcherStats pitchType={offSpeedObject}/>}
        </div>
      <div className='pt-5 d-flex justify-content-center'>
      <label className='mb-5' id='labels'>Filter Pitch:
        <select className='ms-3' value={pitchFilter} onChange={changePitchFilter}>
          {pitchTypeOnFilter.map((type) => {
            return <option id={type}>{type}</option>
          })}
        </select>
        </label>
      </div>
      </>
  )
}

export default Pitchers
