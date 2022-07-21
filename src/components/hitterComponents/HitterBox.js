import React from 'react'

const HitterBox = (props) => {
  //conditionals to show what color to show for each spot
  //ballup
  console.log(props)
  let ballUpAvg = props.pitchType.ballUp / props.pitchType.ballUpAtbats
  ballUpAvg = ballUpAvg.toFixed(3)
  let ballUpDefine
  if(ballUpAvg >= .350) {
      ballUpDefine = "hot"
  }else if(ballUpAvg < .350 && ballUpAvg >= .260) {
      ballUpDefine = "medium"
  } else if(ballUpAvg < .260 && ballUpAvg >= .200) {
      ballUpDefine = "cold"
  } else if(ballUpAvg < .200 && ballUpAvg > 0) {
      ballUpDefine = "freeze"
  } else {
      ballUpDefine = "grey"
  }

  //ballleft
  let ballLeftAvg = props.pitchType.ballLeft / props.pitchType.ballLeftAtbats
  ballLeftAvg = ballLeftAvg.toFixed(3)
  let ballLeftDefine
  if(ballLeftAvg >= .350) {
      ballLeftDefine = "hot"
  }else if(ballLeftAvg < .350 && ballLeftAvg >= .260) {
      ballLeftDefine = "medium"
  } else if(ballLeftAvg < .260 && ballLeftAvg >= .200) {
      ballLeftDefine = "cold"
  } else if(ballLeftAvg < .200 && ballLeftAvg > 0) {
      ballLeftDefine = "freeze"
  } else {
      ballLeftDefine = "grey"
  }

  //ballright
  let ballRightAvg = props.pitchType.ballRight / props.pitchType.ballRightAtbats
  ballRightAvg = ballRightAvg.toFixed(3)
  let ballRightDefine
  if(ballRightAvg >= .350) {
      ballRightDefine = "hot"
  }else if(ballRightAvg < .350 && ballRightAvg >= .260) {
      ballRightDefine = "medium"
  } else if(ballRightAvg < .260 && ballRightAvg >= .200) {
      ballRightDefine = "cold"
  } else if(ballRightAvg < .200 && ballRightAvg > 0) {
      ballRightDefine = "freeze"
  } else {
      ballRightDefine = "grey"
  }

  //ballright
  let ballDownAvg = props.pitchType.ballDown / props.pitchType.ballDownAtbats
  ballDownAvg = ballDownAvg.toFixed(3)
  let ballDownDefine
  if(ballDownAvg >= .350) {
      ballDownDefine = "hot"
  }else if(ballDownAvg < .350 && ballDownAvg >= .260) {
      ballDownDefine = "medium"
  } else if(ballDownAvg < .260 && ballDownAvg >= .200) {
      ballDownDefine = "cold"
  } else if(ballDownAvg < .200 && ballDownAvg > 0) {
      ballDownDefine = "freeze"
  } else {
      ballDownDefine = "grey"
  }

  //strike up and away
  let strikeUpAwayAvg = props.pitchType.strikeUpAway / props.pitchType.strikeUpAwayAtbats
  strikeUpAwayAvg = strikeUpAwayAvg.toFixed(3)
  let strikeUpAwayDefine
  if(strikeUpAwayAvg >= .350) {
      strikeUpAwayDefine = "hot"
  }else if(strikeUpAwayAvg < .350 && strikeUpAwayAvg >= .260) {
      strikeUpAwayDefine = "medium"
  } else if(strikeUpAwayAvg < .260 && strikeUpAwayAvg >= .200) {
      strikeUpAwayDefine = "cold"
  } else if(strikeUpAwayAvg < .200 && strikeUpAwayAvg > 0) {
      strikeUpAwayDefine = "freeze"
  } else {
      strikeUpAwayDefine = "grey"
  }

  //strike up and mid
  let strikeUpMidAvg = props.pitchType.strikeUpMid / props.pitchType.strikeUpMidAtbats
  strikeUpMidAvg = strikeUpMidAvg.toFixed(3)
  let strikeUpMidDefine
  if(strikeUpMidAvg >= .350) {
      strikeUpMidDefine = "hot"
  }else if(strikeUpMidAvg < .350 && strikeUpMidAvg >= .260) {
      strikeUpMidDefine = "medium"
  } else if(strikeUpMidAvg < .260 && strikeUpMidAvg >= .200) {
      strikeUpMidDefine = "cold"
  } else if(strikeUpMidAvg < .200 && strikeUpMidAvg > 0) {
      strikeUpMidDefine = "freeze"
  } else {
      strikeUpMidDefine = "grey"
  }

  //strike up and in
  let strikeUpInAvg = props.pitchType.strikeUpIn / props.pitchType.strikeUpInAtbats
  strikeUpInAvg = strikeUpInAvg.toFixed(3)
  let strikeUpInDefine
  if(strikeUpInAvg >= .350) {
      strikeUpInDefine = "hot"
  }else if(strikeUpInAvg < .350 && strikeUpInAvg >= .260) {
      strikeUpInDefine = "medium"
  } else if(strikeUpInAvg < .260 && strikeUpInAvg >= .200) {
      strikeUpInDefine = "cold"
  } else if(strikeUpInAvg < .200 && strikeUpInAvg > 0) {
      strikeUpInDefine = "freeze"
  } else {
      strikeUpInDefine = "grey"
  }

  //strike mid and away
  let strikeMidAwayAvg = props.pitchType.strikeMidAway / props.pitchType.strikeMidAwayAtbats
  strikeMidAwayAvg = strikeMidAwayAvg.toFixed(3)
  let strikeMidAwayDefine
  if(strikeMidAwayAvg >= .350) {
      strikeMidAwayDefine = "hot"
  }else if(strikeMidAwayAvg < .350 && strikeMidAwayAvg >= .260) {
      strikeMidAwayDefine = "medium"
  } else if(strikeMidAwayAvg < .260 && strikeMidAwayAvg >= .200) {
      strikeMidAwayDefine = "cold"
  } else if(strikeMidAwayAvg < .200 && strikeMidAwayAvg > 0) {
      strikeMidAwayDefine = "freeze"
  } else {
      strikeMidAwayDefine = "grey"
  }

  //strike mid and mid
  let strikeMidMidAvg = props.pitchType.strikeMidMid / props.pitchType.strikeMidMidAtbats
  strikeMidMidAvg = strikeMidMidAvg.toFixed(3)
  let strikeMidMidDefine
  if(strikeMidMidAvg >= .350) {
      strikeMidMidDefine = "hot"
  }else if(strikeMidMidAvg < .350 && strikeMidMidAvg >= .260) {
      strikeMidMidDefine = "medium"
  } else if(strikeMidMidAvg < .260 && strikeMidMidAvg >= .200) {
      strikeMidMidDefine = "cold"
  } else if(strikeMidMidAvg < .200 && strikeMidMidAvg > 0) {
      strikeMidMidDefine = "freeze"
  } else {
      strikeMidMidDefine = "grey"
  }

  //strike mid and in
  let strikeMidInAvg = props.pitchType.strikeMidIn / props.pitchType.strikeMidInAtbats
  strikeMidInAvg = strikeMidInAvg.toFixed(3)
  let strikeMidInDefine
  if(strikeMidInAvg >= .350) {
      strikeMidInDefine = "hot"
  }else if(strikeMidInAvg < .350 && strikeMidInAvg >= .260) {
      strikeMidInDefine = "medium"
  } else if(strikeMidInAvg < .260 && strikeMidInAvg >= .200) {
      strikeMidInDefine = "cold"
  } else if(strikeMidInAvg < .200 && strikeMidInAvg > 0) {
      strikeMidInDefine = "freeze"
  } else {
      strikeMidInDefine = "grey"
  }

  //strike down and away
  let strikeDownAwayAvg = props.pitchType.strikeDownAway / props.pitchType.strikeDownAwayAtbats
  strikeDownAwayAvg = strikeDownAwayAvg.toFixed(3)
  let strikeDownAwayDefine
  if(strikeDownAwayAvg >= .350) {
      strikeDownAwayDefine = "hot"
  }else if(strikeDownAwayAvg < .350 && strikeDownAwayAvg >= .260) {
      strikeDownAwayDefine = "medium"
  } else if(strikeDownAwayAvg < .260 && strikeDownAwayAvg >= .200) {
      strikeDownAwayDefine = "cold"
  } else if(strikeDownAwayAvg < .200 && strikeDownAwayAvg > 0) {
      strikeDownAwayDefine = "freeze"
  } else {
      strikeDownAwayDefine = "grey"
  }

  //strike down and mid
  let strikeDownMidAvg = props.pitchType.strikeDownMid / props.pitchType.strikeDownMidAtbats
  strikeDownMidAvg = strikeDownMidAvg.toFixed(3)
  let strikeDownMidDefine
  if(strikeDownMidAvg >= .350) {
      strikeDownMidDefine = "hot"
  }else if(strikeDownMidAvg < .350 && strikeDownMidAvg >= .260) {
      strikeDownMidDefine = "medium"
  } else if(strikeDownMidAvg < .260 && strikeDownMidAvg >= .200) {
      strikeDownMidDefine = "cold"
  } else if(strikeDownMidAvg < .200 && strikeDownMidAvg > 0) {
      strikeDownMidDefine = "freeze"
  } else {
      strikeDownMidDefine = "grey"
  }

  //strike down and in
  let strikeDownInAvg = props.pitchType.strikeDownIn / props.pitchType.strikeDownInAtbats
  strikeDownInAvg = strikeDownInAvg.toFixed(3)
  let strikeDownInDefine
  if(strikeDownInAvg >= .350) {
      strikeDownInDefine = "hot"
  }else if(strikeDownInAvg < .350 && strikeDownInAvg >= .260) {
      strikeDownInDefine = "medium"
  } else if(strikeDownInAvg < .260 && strikeDownInAvg >= .200) {
      strikeDownInDefine = "cold"
  } else if(strikeDownInAvg < .200 && strikeDownInAvg > 0) {
      strikeDownInDefine = "freeze"
  } else {
      strikeDownInDefine = "grey"
  }

  //stylings to match percentages
  const hot = {
      background: "red"
  }

  const medium = {
      background: "rgb(243, 95, 95)",
  }

  const cold = {
      background: "rgb(101, 101, 245)",
  }

  const freeze = {
      background: "blue"
  }

return (
  <div className='container' id='box'>
    <div className='row'>
      {ballUpDefine == "grey" && <div className='col' id='ball-up'>{ballUpAvg}</div>}
      {ballUpDefine == "hot" && <div style={hot} className='col' id='ball-up'>{ballUpAvg}</div>}
      {ballUpDefine == "medium" && <div style={medium} className='col' id='ball-up'>{ballUpAvg}</div>}
      {ballUpDefine == "cold" && <div style={cold} className='col' id='ball-up'>{ballUpAvg}</div>}
      {ballUpDefine == "freeze" && <div style={freeze} className='col' id='ball-up'>{ballUpAvg}</div>}
    </div>
    <div className='row'>
      {ballLeftDefine == "grey" && <div className='col' id='ball-left'>{ballLeftAvg}</div>}
      {ballLeftDefine == "hot" && <div style={hot} className='col' id='ball-left'>{ballLeftAvg}</div>}
      {ballLeftDefine == "medium" && <div style={medium} className='col' id='ball-left'>{ballLeftAvg}</div>}
      {ballLeftDefine == "cold" && <div style={cold} className='col' id='ball-left'>{ballLeftAvg}</div>}
      {ballLeftDefine == "freeze" && <div style={freeze} className='col' id='ball-left'>{ballLeftAvg}</div>}
      
      {strikeUpAwayDefine == "grey" && <div className='col' id='strike-up-away'>{strikeUpAwayAvg}</div>}
      {strikeUpAwayDefine == "hot" && <div style={hot} className='col' id='strike-up-away'>{strikeUpAwayAvg}</div>}
      {strikeUpAwayDefine == "medium" && <div style={medium} className='col' id='strike-up-away'>{strikeUpAwayAvg}</div>}
      {strikeUpAwayDefine == "cold" && <div style={cold} className='col' id='strike-up-away'>{strikeUpAwayAvg}</div>}
      {strikeUpAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-up-away'>{strikeUpAwayAvg}</div>}
      
      {strikeUpMidDefine == "grey" && <div className='col' id='strike-up-mid'>{strikeUpMidAvg}</div>}
      {strikeUpMidDefine == "hot" && <div style={hot} className='col' id='strike-up-mid'>{strikeUpMidAvg}</div>}
      {strikeUpMidDefine == "medium" && <div style={medium} className='col' id='strike-up-mid'>{strikeUpMidAvg}</div>}
      {strikeUpMidDefine == "cold" && <div style={cold} className='col' id='strike-up-mid'>{strikeUpMidAvg}</div>}
      {strikeUpMidDefine == "freeze" && <div style={freeze} className='col' id='strike-up-mid'>{strikeUpMidAvg}</div>}
     
      {strikeUpInDefine == "grey" && <div className='col' id='strike-up-in'>{strikeUpInAvg}</div>}
      {strikeUpInDefine == "hot" && <div style={hot} className='col' id='strike-up-in'>{strikeUpInAvg}</div>}
      {strikeUpInDefine == "medium" && <div style={medium} className='col' id='strike-up-in'>{strikeUpInAvg}</div>}
      {strikeUpInDefine == "cold" && <div style={cold} className='col' id='strike-up-in'>{strikeUpInAvg}</div>}
      {strikeUpInDefine == "freeze" && <div style={freeze} className='col' id='strike-up-in'>{strikeUpInAvg}</div>}
     
      {ballRightDefine == "grey" && <div className='col' id='ball-right'>{ballRightAvg}</div>}
      {ballRightDefine == "hot" && <div style={hot} className='col' id='ball-right'>{ballRightAvg}</div>}
      {ballRightDefine == "medium" && <div style={medium} className='col' id='ball-right'>{ballRightAvg}</div>}
      {ballRightDefine == "cold" && <div style={cold} className='col' id='ball-right'>{ballRightAvg}</div>}
      {ballRightDefine == "freeze" && <div style={freeze} className='col' id='ball-right'>{ballRightAvg}</div>}
    </div>
    <div className='row'>
      {ballLeftDefine == "grey" && <div className='col' id='ball-left'>Lefty Side</div>}
      {ballLeftDefine == "hot" && <div style={hot} className='col' id='ball-left'>Lefty Side</div>}
      {ballLeftDefine == "medium" && <div style={medium} className='col' id='ball-left'>Lefty Side</div>}
      {ballLeftDefine == "cold" && <div style={cold} className='col' id='ball-left'>Lefty Side</div>}
      {ballLeftDefine == "freeze" && <div style={freeze} className='col' id='ball-left'>Lefty Side</div>}
      
      {strikeMidAwayDefine == "grey" && <div className='col' id='strike-mid-away'>{strikeMidAwayAvg}</div>}
      {strikeMidAwayDefine == "hot" && <div style={hot} className='col' id='strike-mid-away'>{strikeMidAwayAvg}</div>}
      {strikeMidAwayDefine == "medium" && <div style={medium} className='col' id='strike-mid-away'>{strikeMidAwayAvg}</div>}
      {strikeMidAwayDefine == "cold" && <div style={cold} className='col' id='strike-mid-away'>{strikeMidAwayAvg}</div>}
      {strikeMidAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-away'>{strikeMidAwayAvg}</div>}
      
      {strikeMidMidDefine == "grey" && <div className='col' id='strike-mid-mid'>{strikeMidMidAvg}</div>}
      {strikeMidMidDefine == "hot" && <div style={hot} className='col' id='strike-mid-mid'>{strikeMidMidAvg}</div>}
      {strikeMidMidDefine == "medium" && <div style={medium} className='col' id='strike-mid-mid'>{strikeMidMidAvg}</div>}
      {strikeMidMidDefine == "cold" && <div style={cold} className='col' id='strike-mid-mid'>{strikeMidMidAvg}</div>}
      {strikeMidMidDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-mid'>{strikeMidMidAvg}</div>}
     
      {strikeMidInDefine == "grey" && <div className='col' id='strike-mid-in'>{strikeMidInAvg}</div>}
      {strikeMidInDefine == "hot" && <div style={hot} className='col' id='strike-mid-in'>{strikeMidInAvg}</div>}
      {strikeMidInDefine == "medium" && <div style={medium} className='col' id='strike-mid-in'>{strikeMidInAvg}</div>}
      {strikeMidInDefine == "cold" && <div style={cold} className='col' id='strike-mid-in'>{strikeMidInAvg}</div>}
      {strikeMidInDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-in'>{strikeMidInAvg}</div>}
     
      {ballRightDefine == "grey" && <div className='col' id='ball-right'>Righty Side</div>}
      {ballRightDefine == "hot" && <div style={hot} className='col' id='ball-right'>Righty Side</div>}
      {ballRightDefine == "medium" && <div style={medium} className='col' id='ball-right'>Righty Side</div>}
      {ballRightDefine == "cold" && <div style={cold} className='col' id='ball-right'>Righty Side</div>}
      {ballRightDefine == "freeze" && <div style={freeze} className='col' id='ball-right'>Righty Side</div>}
    </div>
    <div className='row'>
    {ballLeftDefine == "grey" && <div className='col' id='ball-left'></div>}
      {ballLeftDefine == "hot" && <div style={hot} className='col' id='ball-left'></div>}
      {ballLeftDefine == "medium" && <div style={medium} className='col' id='ball-left'></div>}
      {ballLeftDefine == "cold" && <div style={cold} className='col' id='ball-left'></div>}
      {ballLeftDefine == "freeze" && <div style={freeze} className='col' id='ball-left'></div>}
      
      {strikeDownAwayDefine == "grey" && <div className='col' id='strike-down-away'>{strikeDownAwayAvg}</div>}
      {strikeDownAwayDefine == "hot" && <div style={hot} className='col' id='strike-down-away'>{strikeDownAwayAvg}</div>}
      {strikeDownAwayDefine == "medium" && <div style={medium} className='col' id='strike-down-away'>{strikeDownAwayAvg}</div>}
      {strikeDownAwayDefine == "cold" && <div style={cold} className='col' id='strike-down-away'>{strikeDownAwayAvg}</div>}
      {strikeDownAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-down-away'>{strikeDownAwayAvg}</div>}
      
      {strikeDownMidDefine == "grey" && <div className='col' id='strike-down-mid'>{strikeDownMidAvg}</div>}
      {strikeDownMidDefine == "hot" && <div style={hot} className='col' id='strike-down-mid'>{strikeDownMidAvg}</div>}
      {strikeDownMidDefine == "medium" && <div style={medium} className='col' id='strike-down-mid'>{strikeDownMidAvg}</div>}
      {strikeDownMidDefine == "cold" && <div style={cold} className='col' id='strike-down-mid'>{strikeDownMidAvg}</div>}
      {strikeDownMidDefine == "freeze" && <div style={freeze} className='col' id='strike-down-mid'>{strikeDownMidAvg}</div>}
     
      {strikeDownInDefine == "grey" && <div className='col' id='strike-down-in'>{strikeDownInAvg}</div>}
      {strikeDownInDefine == "hot" && <div style={hot} className='col' id='strike-down-in'>{strikeDownInAvg}</div>}
      {strikeDownInDefine == "medium" && <div style={medium} className='col' id='strike-down-in'>{strikeDownInAvg}</div>}
      {strikeDownInDefine == "cold" && <div style={cold} className='col' id='strike-down-in'>{strikeDownInAvg}</div>}
      {strikeDownInDefine == "freeze" && <div style={freeze} className='col' id='strike-down-in'>{strikeDownInAvg}</div>}

      {ballRightDefine == "grey" && <div className='col' id='ball-right'></div>}
      {ballRightDefine == "hot" && <div style={hot} className='col' id='ball-right'></div>}
      {ballRightDefine == "medium" && <div style={medium} className='col' id='ball-right'></div>}
      {ballRightDefine == "cold" && <div style={cold} className='col' id='ball-right'></div>}
      {ballRightDefine == "freeze" && <div style={freeze} className='col' id='ball-right'></div>}
    </div>
    <div className='row'>
      {ballDownDefine == "grey" && <div className='col' id='ball-down'>{ballDownAvg}</div>}
      {ballDownDefine == "hot" && <div style={hot} className='col' id='ball-down'>{ballDownAvg}</div>}
      {ballDownDefine == "medium" && <div style={medium} className='col' id='ball-down'>{ballDownAvg}</div>}
      {ballDownDefine == "cold" && <div style={cold} className='col' id='ball-down'>{ballDownAvg}</div>}
      {ballDownDefine == "freeze" && <div style={freeze} className='col' id='ball-down'>{ballDownAvg}</div>}
    </div>
  </div>
)
}

export default HitterBox
