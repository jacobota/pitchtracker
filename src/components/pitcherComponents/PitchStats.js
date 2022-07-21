import React from 'react'
import './PitcherStat.css'

const PitchStats = (props) => {
    //percentage of total pitches
    let percent = props.pitchType.percent * 100;
    percent = percent.toFixed(2)
    //percentage of strikes
    let numStrikes = props.pitchType.strikeUpAway + props.pitchType.strikeUpMid + props.pitchType.strikeUpIn + props.pitchType.strikeMidAway + props.pitchType.strikeMidMid + props.pitchType.strikeMidIn + props.pitchType.strikeDownAway + props.pitchType.strikeDownMid + props.pitchType.strikeDownIn
    let strikePercent = (numStrikes / props.pitchType.thrown) * 100
    strikePercent = strikePercent.toFixed(2)
    //percentage of balls
    let numBalls = props.pitchType.ballUp + props.pitchType.ballLeft + props.pitchType.ballRight + props.pitchType.ballDown
    let ballPercent = (numBalls / props.pitchType.thrown) * 100
    ballPercent = ballPercent.toFixed(2)
  return (
    <div id='pitcherStatText'>
      <h1 className='text-decoration-underline'>Pitcher Stats : {props.pitchType.type}</h1>
      <h3 className='mt-3'>Thrown : {props.pitchType.thrown}</h3>
      <h3 className='mt-3'>Percentage of Total : {percent}%</h3>
      <h3 className='mt-3'>Percentage Strikes : {strikePercent}%</h3>
      <h3 className='mt-3'>Percentage Balls : {ballPercent}%</h3>
    </div>
  )
}

export default PitchStats
