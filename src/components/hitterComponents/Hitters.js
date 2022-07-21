import React, { useState } from 'react'
import HitterBox from './HitterBox'
import HitterStats from './HitterStats'

const Hitters = () => {
  //set states that will be used
  const [fastballObject, setFastballObject] = useState({ type: 'Fastball', atbats: 0, pa: 0, avg: 0, obp: 0, slg: 0, ballUp: 0, ballUpAtbats: 0, ballLeft: 0, ballLeftAtbats: 0, ballRight: 0, ballRightAtbats: 0, ballDown: 0, ballDownAtbats: 0, strikeUpAway: 0, strikeUpAwayAtbats: 0, strikeUpMid: 0, strikeUpMidAtbats: 0, strikeUpIn: 0, strikeUpInAtbats: 0, strikeMidAway: 0, strikeMidAwayAtbats: 0, strikeMidMid: 0, strikeMidMidAtbats: 0, strikeMidIn: 0, strikeMidInAtbats: 0, strikeDownAway: 0, strikeDownAwayAtbats: 0, strikeDownMid: 0, strikeDownMidAtbats: 0, strikeDownIn: 0, strikeDownInAtbats: 0 })
  const [offSpeedObject, setoffSpeedObject] = useState({ type: 'Offspeed', atbats: 0, pa: 0, avg: 0, obp: 0, slg: 0, ballUp: 0, ballUpAtbats: 0, ballLeft: 0, ballLeftAtbats: 0, ballRight: 0, ballRightAtbats: 0, ballDown: 0, ballDownAtbats: 0, strikeUpAway: 0, strikeUpAwayAtbats: 0, strikeUpMid: 0, strikeUpMidAtbats: 0, strikeUpIn: 0, strikeUpInAtbats: 0, strikeMidAway: 0, strikeMidAwayAtbats: 0, strikeMidMid: 0, strikeMidMidAtbats: 0, strikeMidIn: 0, strikeMidInAtbats: 0, strikeDownAway: 0, strikeDownAwayAtbats: 0, strikeDownMid: 0, strikeDownMidAtbats: 0, strikeDownIn: 0,  strikeDownInAtbats: 0 })
  const [pitchType, setPitchType] = useState(['','Fastball', 'Offspeed'])
  const [pitchTypeOnFilter, setPitchTypeOnFilter] = useState(['', 'Fastball', 'Offspeed'])
  const [resultType, setResultType] = useState(['','Out', 'Sacrifice', 'Walk', 'Error', 'Single', 'Double', 'Triple', 'Home Run'])
  const [resultSelect, setResultSelect] = useState("")
  const [pitchSelect, setPitchSelect] = useState("")
  const [pitchSelectLocation, setPitchSelectLocation] = useState("")
  const [pitchFilter, setPitchFilter] = useState("")
  const [pitchLocation, setPitchLocation] = useState(['', 'Ball-Up', 'Ball-Lefty', 'Ball-Righty', 'Ball-Down', 'Strike-Up-Away', 'Strike-Up-Mid', 'Strike-Up-In', 'Strike-Mid-Away', 'Strike-Mid-Mid', 'Strike-Mid-In', 'Strike-Down-Away', 'Strike-Down-Mid', 'Strike-Down-In'])

  //functions
  const changeSelectedPitch = (e) => {
    setPitchSelect(e.target.value)
  }

  const changeSelectedLocation = (e) => {
    setPitchSelectLocation(e.target.value)
  }

  const changeResult = (e) => {
    setResultSelect(e.target.value)
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
    else if(resultSelect == '') {
      alert("Enter a value for the result of the pitch")
      return
    }
    else if(pitchSelect == pitchType[1]) {
      if(pitchSelectLocation == pitchLocation[1]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.ballUp++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.ballUp++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.ballUp++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.ballUpAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.ballUp++
        }
      } else if(pitchSelectLocation == pitchLocation[2]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.ballLeft++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.ballLeft++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.ballLeft++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.ballLeftAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.ballLeft++
        }
      } else if(pitchSelectLocation == pitchLocation[3]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.ballRight++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.ballRight++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.ballRight++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.ballRightAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.ballRight++
        }
      } else if(pitchSelectLocation == pitchLocation[4]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.ballDown++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.ballDown++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.ballDown++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.ballDownAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.ballDown++
        }
      } else if(pitchSelectLocation == pitchLocation[5]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeUpAway++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeUpAway++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeUpAway++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeUpAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeUpAway++
        }
      } else if(pitchSelectLocation == pitchLocation[6]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeUpMid++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeUpMid++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeUpMid++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeUpMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeUpMid++
        }
      } else if(pitchSelectLocation == pitchLocation[7]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeUpIn++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeUpIn++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeUpIn++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeUpInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeUpIn++
        }
      } else if(pitchSelectLocation == pitchLocation[8]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeMidAway++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeMidAway++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeMidAway++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeMidAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeMidAway++
        }
      } else if(pitchSelectLocation == pitchLocation[9]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeMidMid++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeMidMid++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeMidMid++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeMidMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeMidMid++
        }
      } else if(pitchSelectLocation == pitchLocation[10]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeMidIn++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeMidIn++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeMidIn++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeMidInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeMidIn++
        }
      } else if(pitchSelectLocation == pitchLocation[11]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeDownAway++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeDownAway++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeDownAway++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeDownAwayAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeDownAway++
        }
      } else if(pitchSelectLocation == pitchLocation[12]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeDownMid++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeDownMid++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeDownMid++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeDownMidAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeDownMid++
        }
      } else if(pitchSelectLocation == pitchLocation[13]) {
        if(resultSelect == resultType[1]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
        }else if(resultSelect == resultType[3]) {
          fastballObject.obp++
        }else if(resultSelect == resultType[4]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
        }else if(resultSelect == resultType[5]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg++
          fastballObject.strikeDownIn++
        }else if(resultSelect == resultType[6]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 2
          fastballObject.strikeDownIn++
        }else if(resultSelect == resultType[7]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 3
          fastballObject.strikeDownIn++
        }
        else if(resultSelect == resultType[8]) {
          fastballObject.atbats++
          fastballObject.strikeDownInAtbats++
          fastballObject.obp++
          fastballObject.avg++
          fastballObject.slg = fastballObject.slg + 4
          fastballObject.strikeDownIn++
        }
      }
      fastballObject.pa++
    } else if(pitchSelect == pitchType[2]) {
      if(pitchSelectLocation == pitchLocation[1]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.ballUp++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.ballUp++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.ballUp++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.ballUpAtbats++
          offSpeedObject.obp++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.ballUp++
        }
      } else if(pitchSelectLocation == pitchLocation[2]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.ballLeft++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.ballLeft++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.ballLeft++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.ballLeftAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.ballLeft++
        }
      } else if(pitchSelectLocation == pitchLocation[3]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.ballRight++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.ballRight++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.ballRight++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.ballRightAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.ballRight++
        }
      } else if(pitchSelectLocation == pitchLocation[4]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.ballDown++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.ballDown++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.ballDown++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.ballDownAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.ballDown++
        }
      } else if(pitchSelectLocation == pitchLocation[5]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeUpAway++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeUpAway++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeUpAway++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeUpAway++
        }
      } else if(pitchSelectLocation == pitchLocation[6]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeUpMid++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeUpMid++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeUpMid++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeUpMid++
        }
      } else if(pitchSelectLocation == pitchLocation[7]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeUpIn++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeUpIn++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeUpIn++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeUpInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeUpIn++
        }
      } else if(pitchSelectLocation == pitchLocation[8]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeMidAway++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeMidAway++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeMidAway++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeMidAway++
        }
      } else if(pitchSelectLocation == pitchLocation[9]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeMidMid++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeMidMid++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeMidMid++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeMidMid++
        }
      } else if(pitchSelectLocation == pitchLocation[10]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeMidIn++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeMidIn++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeMidIn++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeMidInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeMidIn++
        }
      } else if(pitchSelectLocation == pitchLocation[11]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeDownAway++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeDownAway++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeDownAway++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownAwayAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeDownAway++
        }
      } else if(pitchSelectLocation == pitchLocation[12]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeDownMid++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeDownMid++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeDownMid++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownMidAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeDownMid++
        }
      } else if(pitchSelectLocation == pitchLocation[13]) {
        if(resultSelect == resultType[1]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
        }else if(resultSelect == resultType[3]) {
          offSpeedObject.obp++
        }else if(resultSelect == resultType[4]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
        }else if(resultSelect == resultType[5]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg++
          offSpeedObject.strikeDownIn++
        }else if(resultSelect == resultType[6]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 2
          offSpeedObject.strikeDownIn++
        }else if(resultSelect == resultType[7]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 3
          offSpeedObject.strikeDownIn++
        }
        else if(resultSelect == resultType[8]) {
          offSpeedObject.atbats++
          offSpeedObject.strikeDownInAtbats++
          offSpeedObject.obp++
          offSpeedObject.avg++
          offSpeedObject.slg = offSpeedObject.slg + 4
          offSpeedObject.strikeDownIn++
        }
      }
      offSpeedObject.pa++
    } 
  }
  let displayFastball = pitchFilter == pitchTypeOnFilter[1]
  let displayOffSpeed = pitchFilter == pitchTypeOnFilter[2]

  return (
    <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Hitter View</h1>
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
        <label className='mb-5' id='labels'>Pitch Result:
        <select className='ms-3' value={resultSelect} onChange={changeResult}>
          {resultType.map((result) => {
            return <option id={result}>{result}</option>
          })}
        </select>
        </label>
        <button className='p-3 btn btn-light' id='button' onClick={handleInput}><h1 id='buttonText'>Enter Pitch</h1></button>
      </div>
      <div className='pt-5 d-flex justify-content-center'>
        {displayFastball && <HitterBox pitchType={fastballObject}/>}
        {displayOffSpeed && <HitterBox pitchType={offSpeedObject}/>}
      </div>
      <div className=' mt-5 p-5 d-flex justify-content-center container'>
        {displayFastball && <HitterStats pitchType={fastballObject}/>}
        {displayOffSpeed && <HitterStats pitchType={offSpeedObject}/>}
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

export default Hitters

