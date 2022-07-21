import React from 'react'
import './PitcherBox.css'

const PitcherBox = (props) => {
    //-----Ball Percentages to 2 spots-------
    let ballUpPerc = props.pitchType.ballUp / props.pitchType.thrown
    ballUpPerc = ballUpPerc.toFixed(2)
    let ballLeftPerc = props.pitchType.ballLeft / props.pitchType.thrown
    ballLeftPerc = ballLeftPerc.toFixed(2)
    let ballRightPerc = props.pitchType.ballRight / props.pitchType.thrown
    ballRightPerc = ballRightPerc.toFixed(2)
    let ballDownPerc = props.pitchType.ballDown / props.pitchType.thrown
    ballDownPerc = ballDownPerc.toFixed(2)

    //----- Strike Percentages to 2 spots ---------
    let strikeUpAwayPerc = props.pitchType.strikeUpAway / props.pitchType.thrown
    strikeUpAwayPerc = strikeUpAwayPerc.toFixed(2)
    let strikeUpMidPerc = props.pitchType.strikeUpMid / props.pitchType.thrown
    strikeUpMidPerc = strikeUpMidPerc.toFixed(2)
    let strikeUpInPerc = props.pitchType.strikeUpIn / props.pitchType.thrown
    strikeUpInPerc = strikeUpInPerc.toFixed(2)
    let strikeMidAwayPerc = props.pitchType.strikeMidAway / props.pitchType.thrown
    strikeMidAwayPerc = strikeMidAwayPerc.toFixed(2)
    let strikeMidMidPerc = props.pitchType.strikeMidMid / props.pitchType.thrown
    strikeMidMidPerc = strikeMidMidPerc.toFixed(2)
    let strikeMidInPerc = props.pitchType.strikeMidIn / props.pitchType.thrown
    strikeMidInPerc = strikeMidInPerc.toFixed(2)
    let strikeDownAwayPerc = props.pitchType.strikeDownAway / props.pitchType.thrown
    strikeDownAwayPerc = strikeDownAwayPerc.toFixed(2)
    let strikeDownMidPerc = props.pitchType.strikeDownMid / props.pitchType.thrown
    strikeDownMidPerc = strikeDownMidPerc.toFixed(2)
    let strikeDownInPerc = props.pitchType.strikeDownIn / props.pitchType.thrown
    strikeDownInPerc = strikeDownInPerc.toFixed(2)

    //conditionals to show what color to show for each spot
    //ballup
    let ballUpDefine
    if(ballUpPerc >= .20) {
        ballUpDefine = "hot"
    }else if(ballUpPerc < .20 && ballUpPerc >= .08) {
        ballUpDefine = "medium"
    } else if(ballUpPerc < .08 && ballUpPerc >= .03) {
        ballUpDefine = "cold"
    } else if(ballUpPerc < .03 && ballUpPerc > 0) {
        ballUpDefine = "freeze"
    } else {
        ballUpDefine = "grey"
    }

    //ballleft
    let ballLeftDefine
    if(ballLeftPerc >= .20) {
        ballLeftDefine = "hot"
    }else if(ballLeftPerc < .20 && ballLeftPerc >= .08) {
        ballLeftDefine = "medium"
    } else if(ballLeftPerc < .08 && ballLeftPerc >= .03) {
        ballLeftDefine = "cold"
    } else if(ballLeftPerc < .03 && ballLeftPerc > 0) {
        ballLeftDefine = "freeze"
    } else {
        ballLeftDefine = "grey"
    }

    //ballright
    let ballRightDefine
    if(ballRightPerc >= .20) {
        ballRightDefine = "hot"
    }else if(ballRightPerc < .20 && ballRightPerc >= .08) {
        ballRightDefine = "medium"
    } else if(ballRightPerc < .08 && ballRightPerc >= .03) {
        ballRightDefine = "cold"
    } else if(ballRightPerc < .03 && ballRightPerc > 0) {
        ballRightDefine = "freeze"
    } else {
        ballRightDefine = "grey"
    }

    //ballright
    let ballDownDefine
    if(ballDownPerc >= .20) {
        ballDownDefine = "hot"
    }else if(ballDownPerc < .20 && ballDownPerc >= .08) {
        ballDownDefine = "medium"
    } else if(ballDownPerc < .08 && ballDownPerc >= .03) {
        ballDownDefine = "cold"
    } else if(ballDownPerc < .03 && ballDownPerc > 0) {
        ballDownDefine = "freeze"
    } else {
        ballDownDefine = "grey"
    }

    //strike up and away
    let strikeUpAwayDefine
    if(strikeUpAwayPerc >= .20) {
        strikeUpAwayDefine = "hot"
    }else if(strikeUpAwayPerc < .20 && strikeUpAwayPerc >= .08) {
        strikeUpAwayDefine = "medium"
    } else if(strikeUpAwayPerc < .08 && strikeUpAwayPerc >= .03) {
        strikeUpAwayDefine = "cold"
    } else if(strikeUpAwayPerc < .03 && strikeUpAwayPerc > 0) {
        strikeUpAwayDefine = "freeze"
    } else {
        strikeUpAwayDefine = "grey"
    }

    //strike up and mid
    let strikeUpMidDefine
    if(strikeUpMidPerc >= .20) {
        strikeUpMidDefine = "hot"
    }else if(strikeUpMidPerc < .20 && strikeUpMidPerc >= .08) {
        strikeUpMidDefine = "medium"
    } else if(strikeUpMidPerc < .08 && strikeUpMidPerc >= .03) {
        strikeUpMidDefine = "cold"
    } else if(strikeUpMidPerc < .03 && strikeUpMidPerc > 0) {
        strikeUpMidDefine = "freeze"
    } else {
        strikeUpMidDefine = "grey"
    }

    //strike up and in
    let strikeUpInDefine
    if(strikeUpInPerc >= .20) {
        strikeUpInDefine = "hot"
    }else if(strikeUpInPerc < .20 && strikeUpInPerc >= .08) {
        strikeUpInDefine = "medium"
    } else if(strikeUpInPerc < .08 && strikeUpInPerc >= .03) {
        strikeUpInDefine = "cold"
    } else if(strikeUpInPerc < .03 && strikeUpInPerc > 0) {
        strikeUpInDefine = "freeze"
    } else {
        strikeUpInDefine = "grey"
    }

    //strike mid and away
    let strikeMidAwayDefine
    if(strikeMidAwayPerc >= .20) {
        strikeMidAwayDefine = "hot"
    }else if(strikeMidAwayPerc < .20 && strikeMidAwayPerc >= .08) {
        strikeMidAwayDefine = "medium"
    } else if(strikeMidAwayPerc < .08 && strikeMidAwayPerc >= .03) {
        strikeMidAwayDefine = "cold"
    } else if(strikeMidAwayPerc < .03 && strikeMidAwayPerc > 0) {
        strikeMidAwayDefine = "freeze"
    } else {
        strikeMidAwayDefine = "grey"
    }

    //strike mid and mid
    let strikeMidMidDefine
    if(strikeMidMidPerc >= .20) {
        strikeMidMidDefine = "hot"
    }else if(strikeMidMidPerc < .20 && strikeMidMidPerc >= .08) {
        strikeMidMidDefine = "medium"
    } else if(strikeMidMidPerc < .08 && strikeMidMidPerc >= .03) {
        strikeMidMidDefine = "cold"
    } else if(strikeMidMidPerc < .03 && strikeMidMidPerc > 0) {
        strikeMidMidDefine = "freeze"
    } else {
        strikeMidMidDefine = "grey"
    }

    //strike mid and in
    let strikeMidInDefine
    if(strikeMidInPerc >= .20) {
        strikeMidInDefine = "hot"
    }else if(strikeMidInPerc < .20 && strikeMidInPerc >= .08) {
        strikeMidInDefine = "medium"
    } else if(strikeMidInPerc < .08 && strikeMidInPerc >= .03) {
        strikeMidInDefine = "cold"
    } else if(strikeMidInPerc < .03 && strikeMidInPerc > 0) {
        strikeMidInDefine = "freeze"
    } else {
        strikeMidInDefine = "grey"
    }

    //strike down and away
    let strikeDownAwayDefine
    if(strikeDownAwayPerc >= .20) {
        strikeDownAwayDefine = "hot"
    }else if(strikeDownAwayPerc < .20 && strikeDownAwayPerc >= .08) {
        strikeDownAwayDefine = "medium"
    } else if(strikeDownAwayPerc < .08 && strikeDownAwayPerc >= .03) {
        strikeDownAwayDefine = "cold"
    } else if(strikeDownAwayPerc < .03 && strikeDownAwayPerc > 0) {
        strikeDownAwayDefine = "freeze"
    } else {
        strikeDownAwayDefine = "grey"
    }

    //strike down and mid
    let strikeDownMidDefine
    if(strikeDownMidPerc >= .20) {
        strikeDownMidDefine = "hot"
    }else if(strikeDownMidPerc < .20 && strikeDownMidPerc >= .08) {
        strikeDownMidDefine = "medium"
    } else if(strikeDownMidPerc < .08 && strikeDownMidPerc >= .03) {
        strikeDownMidDefine = "cold"
    } else if(strikeDownMidPerc < .03 && strikeDownMidPerc > 0) {
        strikeDownMidDefine = "freeze"
    } else {
        strikeDownMidDefine = "grey"
    }

    //strike down and in
    let strikeDownInDefine
    if(strikeDownInPerc >= .20) {
        strikeDownInDefine = "hot"
    }else if(strikeDownInPerc < .20 && strikeDownInPerc >= .08) {
        strikeDownInDefine = "medium"
    } else if(strikeDownInPerc < .08 && strikeDownInPerc >= .03) {
        strikeDownInDefine = "cold"
    } else if(strikeDownInPerc < .03 && strikeDownInPerc > 0) {
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
        {ballUpDefine == "grey" && <div className='col' id='ball-up'>{props.pitchType.ballUp}</div>}
        {ballUpDefine == "hot" && <div style={hot} className='col' id='ball-up'>{props.pitchType.ballUp}</div>}
        {ballUpDefine == "medium" && <div style={medium} className='col' id='ball-up'>{props.pitchType.ballUp}</div>}
        {ballUpDefine == "cold" && <div style={cold} className='col' id='ball-up'>{props.pitchType.ballUp}</div>}
        {ballUpDefine == "freeze" && <div style={freeze} className='col' id='ball-up'>{props.pitchType.ballUp}</div>}
      </div>
      <div className='row'>
        {ballLeftDefine == "grey" && <div className='col' id='ball-left'>{props.pitchType.ballLeft}</div>}
        {ballLeftDefine == "hot" && <div style={hot} className='col' id='ball-left'>{props.pitchType.ballLeft}</div>}
        {ballLeftDefine == "medium" && <div style={medium} className='col' id='ball-left'>{props.pitchType.ballLeft}</div>}
        {ballLeftDefine == "cold" && <div style={cold} className='col' id='ball-left'>{props.pitchType.ballLeft}</div>}
        {ballLeftDefine == "freeze" && <div style={freeze} className='col' id='ball-left'>{props.pitchType.ballLeft}</div>}
        
        {strikeUpAwayDefine == "grey" && <div className='col' id='strike-up-away'>{props.pitchType.strikeUpAway}</div>}
        {strikeUpAwayDefine == "hot" && <div style={hot} className='col' id='strike-up-away'>{props.pitchType.strikeUpAway}</div>}
        {strikeUpAwayDefine == "medium" && <div style={medium} className='col' id='strike-up-away'>{props.pitchType.strikeUpAway}</div>}
        {strikeUpAwayDefine == "cold" && <div style={cold} className='col' id='strike-up-away'>{props.pitchType.strikeUpAway}</div>}
        {strikeUpAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-up-away'>{props.pitchType.strikeUpAway}</div>}
        
        {strikeUpMidDefine == "grey" && <div className='col' id='strike-up-mid'>{props.pitchType.strikeUpMid}</div>}
        {strikeUpMidDefine == "hot" && <div style={hot} className='col' id='strike-up-mid'>{props.pitchType.strikeUpMid}</div>}
        {strikeUpMidDefine == "medium" && <div style={medium} className='col' id='strike-up-mid'>{props.pitchType.strikeUpMid}</div>}
        {strikeUpMidDefine == "cold" && <div style={cold} className='col' id='strike-up-mid'>{props.pitchType.strikeUpMid}</div>}
        {strikeUpMidDefine == "freeze" && <div style={freeze} className='col' id='strike-up-mid'>{props.pitchType.strikeUpMid}</div>}
       
        {strikeUpInDefine == "grey" && <div className='col' id='strike-up-in'>{props.pitchType.strikeUpIn}</div>}
        {strikeUpInDefine == "hot" && <div style={hot} className='col' id='strike-up-in'>{props.pitchType.strikeUpIn}</div>}
        {strikeUpInDefine == "medium" && <div style={medium} className='col' id='strike-up-in'>{props.pitchType.strikeUpIn}</div>}
        {strikeUpInDefine == "cold" && <div style={cold} className='col' id='strike-up-in'>{props.pitchType.strikeUpIn}</div>}
        {strikeUpInDefine == "freeze" && <div style={freeze} className='col' id='strike-up-in'>{props.pitchType.strikeUpIn}</div>}
       
        {ballRightDefine == "grey" && <div className='col' id='ball-right'>{props.pitchType.ballRight}</div>}
        {ballRightDefine == "hot" && <div style={hot} className='col' id='ball-right'>{props.pitchType.ballRight}</div>}
        {ballRightDefine == "medium" && <div style={medium} className='col' id='ball-right'>{props.pitchType.ballRight}</div>}
        {ballRightDefine == "cold" && <div style={cold} className='col' id='ball-right'>{props.pitchType.ballRight}</div>}
        {ballRightDefine == "freeze" && <div style={freeze} className='col' id='ball-right'>{props.pitchType.ballRight}</div>}
      </div>
      <div className='row'>
        {ballLeftDefine == "grey" && <div className='col' id='ball-left'>Lefty Side</div>}
        {ballLeftDefine == "hot" && <div style={hot} className='col' id='ball-left'>Lefty Side</div>}
        {ballLeftDefine == "medium" && <div style={medium} className='col' id='ball-left'>Lefty Side</div>}
        {ballLeftDefine == "cold" && <div style={cold} className='col' id='ball-left'>Lefty Side</div>}
        {ballLeftDefine == "freeze" && <div style={freeze} className='col' id='ball-left'>Lefty Side</div>}
        
        {strikeMidAwayDefine == "grey" && <div className='col' id='strike-mid-away'>{props.pitchType.strikeMidAway}</div>}
        {strikeMidAwayDefine == "hot" && <div style={hot} className='col' id='strike-mid-away'>{props.pitchType.strikeMidAway}</div>}
        {strikeMidAwayDefine == "medium" && <div style={medium} className='col' id='strike-mid-away'>{props.pitchType.strikeMidAway}</div>}
        {strikeMidAwayDefine == "cold" && <div style={cold} className='col' id='strike-mid-away'>{props.pitchType.strikeMidAway}</div>}
        {strikeMidAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-away'>{props.pitchType.strikeMidAway}</div>}
        
        {strikeMidMidDefine == "grey" && <div className='col' id='strike-mid-mid'>{props.pitchType.strikeMidMid}</div>}
        {strikeMidMidDefine == "hot" && <div style={hot} className='col' id='strike-mid-mid'>{props.pitchType.strikeMidMid}</div>}
        {strikeMidMidDefine == "medium" && <div style={medium} className='col' id='strike-mid-mid'>{props.pitchType.strikeMidMid}</div>}
        {strikeMidMidDefine == "cold" && <div style={cold} className='col' id='strike-mid-mid'>{props.pitchType.strikeMidMid}</div>}
        {strikeMidMidDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-mid'>{props.pitchType.strikeMidMid}</div>}
       
        {strikeMidInDefine == "grey" && <div className='col' id='strike-mid-in'>{props.pitchType.strikeMidIn}</div>}
        {strikeMidInDefine == "hot" && <div style={hot} className='col' id='strike-mid-in'>{props.pitchType.strikeMidIn}</div>}
        {strikeMidInDefine == "medium" && <div style={medium} className='col' id='strike-mid-in'>{props.pitchType.strikeMidIn}</div>}
        {strikeMidInDefine == "cold" && <div style={cold} className='col' id='strike-mid-in'>{props.pitchType.strikeMidIn}</div>}
        {strikeMidInDefine == "freeze" && <div style={freeze} className='col' id='strike-mid-in'>{props.pitchType.strikeMidIn}</div>}
       
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
        
        {strikeDownAwayDefine == "grey" && <div className='col' id='strike-down-away'>{props.pitchType.strikeDownAway}</div>}
        {strikeDownAwayDefine == "hot" && <div style={hot} className='col' id='strike-down-away'>{props.pitchType.strikeDownAway}</div>}
        {strikeDownAwayDefine == "medium" && <div style={medium} className='col' id='strike-down-away'>{props.pitchType.strikeDownAway}</div>}
        {strikeDownAwayDefine == "cold" && <div style={cold} className='col' id='strike-down-away'>{props.pitchType.strikeDownAway}</div>}
        {strikeDownAwayDefine == "freeze" && <div style={freeze} className='col' id='strike-down-away'>{props.pitchType.strikeDownAway}</div>}
        
        {strikeDownMidDefine == "grey" && <div className='col' id='strike-down-mid'>{props.pitchType.strikeDownMid}</div>}
        {strikeDownMidDefine == "hot" && <div style={hot} className='col' id='strike-down-mid'>{props.pitchType.strikeDownMid}</div>}
        {strikeDownMidDefine == "medium" && <div style={medium} className='col' id='strike-down-mid'>{props.pitchType.strikeDownMid}</div>}
        {strikeDownMidDefine == "cold" && <div style={cold} className='col' id='strike-down-mid'>{props.pitchType.strikeDownMid}</div>}
        {strikeDownMidDefine == "freeze" && <div style={freeze} className='col' id='strike-down-mid'>{props.pitchType.strikeDownMid}</div>}
       
        {strikeDownInDefine == "grey" && <div className='col' id='strike-down-in'>{props.pitchType.strikeDownIn}</div>}
        {strikeDownInDefine == "hot" && <div style={hot} className='col' id='strike-down-in'>{props.pitchType.strikeDownIn}</div>}
        {strikeDownInDefine == "medium" && <div style={medium} className='col' id='strike-down-in'>{props.pitchType.strikeDownIn}</div>}
        {strikeDownInDefine == "cold" && <div style={cold} className='col' id='strike-down-in'>{props.pitchType.strikeDownIn}</div>}
        {strikeDownInDefine == "freeze" && <div style={freeze} className='col' id='strike-down-in'>{props.pitchType.strikeDownIn}</div>}

        {ballRightDefine == "grey" && <div className='col' id='ball-right'></div>}
        {ballRightDefine == "hot" && <div style={hot} className='col' id='ball-right'></div>}
        {ballRightDefine == "medium" && <div style={medium} className='col' id='ball-right'></div>}
        {ballRightDefine == "cold" && <div style={cold} className='col' id='ball-right'></div>}
        {ballRightDefine == "freeze" && <div style={freeze} className='col' id='ball-right'></div>}
      </div>
      <div className='row'>
        {ballDownDefine == "grey" && <div className='col' id='ball-down'>{props.pitchType.ballDown}</div>}
        {ballDownDefine == "hot" && <div style={hot} className='col' id='ball-down'>{props.pitchType.ballDown}</div>}
        {ballDownDefine == "medium" && <div style={medium} className='col' id='ball-down'>{props.pitchType.ballDown}</div>}
        {ballDownDefine == "cold" && <div style={cold} className='col' id='ball-down'>{props.pitchType.ballDown}</div>}
        {ballDownDefine == "freeze" && <div style={freeze} className='col' id='ball-down'>{props.pitchType.ballDown}</div>}
      </div>
    </div>
  )
}

export default PitcherBox
