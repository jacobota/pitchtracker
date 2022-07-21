import React, { useState } from 'react'
import './Pitchers.css'
import PitcherBox from './PitcherBox'

const Pitchers = () => {
  //set states that will be used
  const [fastballObject, setFastballObject] = useState({ type: 'Fastball', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0})
  const [curveballObject, setCurveballObject] = useState({ type: 'Curveball', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0 })
  const [sliderObject, setSliderObject] = useState({ type: 'Slider', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0 })
  const [changeupObject, setChangeupObject] = useState({ type: 'Change-up', thrown: 0, percent:0, ballUp: 0, ballLeft: 0, ballRight: 0, ballDown: 0, strikeUpAway: 0, strikeUpMid: 0, strikeUpIn: 0, strikeMidAway: 0, strikeMidMid: 0, strikeMidIn: 0, strikeDownAway: 0, strikeDownMid: 0, strikeDownIn: 0 })
  const [pitchType, setPitchType] = useState(['','Fastball', 'Curveball', 'Slider', 'Change-up'])
  const [pitchTypeOnFilter, setPitchTypeOnFilter] = useState(['', 'Fastball', 'Curveball', 'Slider', 'Change-up'])
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
      if(pitchSelectLocation == pitchLocation[1]) {
        curveballObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        curveballObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        curveballObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        curveballObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        curveballObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        curveballObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        curveballObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        curveballObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        curveballObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        curveballObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        curveballObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        curveballObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        curveballObject.strikeDownIn++
      }
      curveballObject.thrown++
      setNumPitches(numPitches + 1)
    } else if(pitchSelect == pitchType[3]) {
      if(pitchSelectLocation == pitchLocation[1]) {
        sliderObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        sliderObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        sliderObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        sliderObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        sliderObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        sliderObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        sliderObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        sliderObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        sliderObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        sliderObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        sliderObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        sliderObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        sliderObject.strikeDownIn++
      }
      sliderObject.thrown++
      setNumPitches(numPitches + 1)
    } else if(pitchSelect == pitchType[4]) {
      if(pitchSelectLocation == pitchLocation[1]) {
        changeupObject.ballUp++
      } else if(pitchSelectLocation == pitchLocation[2]) {
        changeupObject.ballLeft++
      } else if(pitchSelectLocation == pitchLocation[3]) {
        changeupObject.ballRight++
      } else if(pitchSelectLocation == pitchLocation[4]) {
        changeupObject.ballDown++
      } else if(pitchSelectLocation == pitchLocation[5]) {
        changeupObject.strikeUpAway++
      } else if(pitchSelectLocation == pitchLocation[6]) {
        changeupObject.strikeUpMid++
      } else if(pitchSelectLocation == pitchLocation[7]) {
        changeupObject.strikeUpIn++
      } else if(pitchSelectLocation == pitchLocation[8]) {
        changeupObject.strikeMidAway++
      } else if(pitchSelectLocation == pitchLocation[9]) {
        changeupObject.strikeMidMid++
      } else if(pitchSelectLocation == pitchLocation[10]) {
        changeupObject.strikeMidIn++
      } else if(pitchSelectLocation == pitchLocation[11]) {
        changeupObject.strikeDownAway++
      } else if(pitchSelectLocation == pitchLocation[12]) {
        changeupObject.strikeDownMid++
      } else if(pitchSelectLocation == pitchLocation[13]) {
        changeupObject.strikeDownIn++
      }
      changeupObject.thrown++
      setNumPitches(numPitches + 1)
    }
    let fastballPerc = fastballObject.thrown / numPitches
    fastballObject.percent = fastballPerc
    let curvePerc = curveballObject.thrown / numPitches
    curveballObject.percent = curvePerc
    let sliderPerc = sliderObject.thrown / numPitches
    sliderObject.percent = sliderPerc
    let changeupPerc = changeupObject.thrown / numPitches
    changeupObject.percent = changeupPerc
  }

  let displayFastball = pitchFilter == pitchTypeOnFilter[1]
  let displayCurveball = pitchFilter == pitchTypeOnFilter[2]
  let displaySlider = pitchFilter == pitchTypeOnFilter[3]
  let displayChangeup = pitchFilter == pitchTypeOnFilter[4]

  return (
    <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitcher View</h1>
      </div>
      <div className='mt-5 p-5 d-flex flex-column align-items-center justify-content-center container' id='textContainer'>
        <label className='mb-5' id='labels'>Pitch Location:
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
        {displayCurveball && <PitcherBox pitchType={curveballObject}/>}
        {displaySlider && <PitcherBox pitchType={sliderObject}/>}
        {displayChangeup && <PitcherBox pitchType={changeupObject}/>}
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
