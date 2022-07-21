import React from 'react'

const HitterStats = (props) => {
  console.log(props)
return (
  <div id='pitcherStatText'>
    <h1 className='text-decoration-underline'>Hitter Stats : {props.pitchType.type}</h1>
    <h3 className='mt-3'>Thrown : {props.pitchType.thrown}</h3>
  </div>
)
}

export default HitterStats
