import React from 'react'

const HitterStats = (props) => {
  let average = props.pitchType.avg / props.pitchType.atbats
  average = average.toFixed(3)
  let slugging = props.pitchType.slg / props.pitchType.atbats
  let onbase = props.pitchType.obp / props.pitchType.pa
  let onbasePlusSlugging = (slugging + onbase)
  slugging = slugging.toFixed(3)
  onbase = onbase.toFixed(3)
  onbasePlusSlugging = onbasePlusSlugging.toFixed(3)

return (
  <div id='pitcherStatText'>
    <h1 className='text-decoration-underline'>Hitter Stats : {props.pitchType.type}</h1>
    <h3 className='mt-3'>At-bats : {props.pitchType.atbats}</h3>
    <h3 className='mt-3'>Plate Appearances : {props.pitchType.pa}</h3>
    <h3 className='mt-3'>Batting Average : {average}</h3>
    <h3 className='mt-3'>On Base Percentage (OBP) : {onbase}</h3>
    <h3 className='mt-3'>Slugging Percentage : {slugging}</h3>
    <h3 className='mt-3'>On Base + Slugging (OPS) : {onbasePlusSlugging}</h3>
  </div>
)
}

export default HitterStats
