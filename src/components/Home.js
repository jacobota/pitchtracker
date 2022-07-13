import React, { Component } from 'react'
import './Home.css'

export class Home extends Component {
  render() {
    return (
      <>
      <div className='pt-5 pb-5 d-flex justify-content-center' id='headContainer'>
        <h1 id='header'>Pitch Tracker</h1>
      </div>
      {/*Description*/}
      <div className='container-lg' id='textContainer'>
        <div className='d-flex justify-content-center pt-5 p-3 mt-5'>
            <h1 id='description'>DESCRIPTION</h1>
        </div>
        <div className='d-flex flex-column justify-content-start p-3'>
            {/*Overall Description*/}
            <p className='pb-4' id='text'>
                Pitch Tracker is a web application whose purpose is to enable 
                coaches, parents, fans, or even players to not only gain an understanding 
                for baseball statistics, but to also give an insight on tendencies for 
                pitchers and hot/cold zones for hitters. The intent of this web application is to 
                give a new perspective on game tracking for those who enjoy charting games or players 
                while also giving them a user-friendly UI. 
                
            </p>
            {/*Pitchers Description*/}
            <p className='pb-4' id='text'>
                For pitchers, this web application is meant to discover tendencies
                in a pitchers game, it is used to evaluate how often certain pitches 
                are thrown, where in the zone the pitcher tends to go to most, and display the
                overall statistics of the player over time. The intent is to bring a different 
                way to chart pitchers in order for coaches, parents, fans, and even the pitchers
                to look back and see what works and what doesn't.
            </p>
            {/*Hitters Description*/}
            <p className='pb-4' id='text'>
                For hitters, this web application is meant to display where and in what   
                counts a hitter is most productive. Pitch Tracker will also display hot and cold 
                zones for the hitter based on their averages that they produce when the ball is 
                thrown into specific locations. The intent for the hitters is to show visually to 
                both coaches, parents, fans, and to the hitters what zones they thrive in and what
                zones they need more work on.
            </p>
        </div>
      </div>
      {/*How it works*/}
      <div className='container-lg' id='textContainer'>
        <div className='d-flex justify-content-center pt-5 p-3 mt-5'>
            <h1 id='description'>HOW IT WORKS</h1>
        </div>
        <div className='d-flex flex-column justify-content-start p-3'>
            {/*Pitchers: How it works*/}
            <p className='pb-1' id='hiwtext'>
                Pitchers:
            </p>
            <p className='pb-4' id='text'>
                After creating a pitcher, plate view will be enabled to chart the pitcher.
                In order to submit a pitch, you must press a location on the zone, what pitch 
                was thrown and the result of the pitch. From that it will build the statistics 
                of the pitcher and display them to the user above plate view so that the user
                has a sense of how the pitcher is doing.
            </p>
            {/*Add an image of pitcher view*/}
            {/*Hitters: How it works*/}
            <p className='pb-1' id='hiwtext'>
                Hitters:
            </p>
            <p className='pb-4' id='text'>
                After creating a hitter, plate view will be enabled to chart the hitter.
                In order to submit a pitch, you must press a location on the zone, what pitch 
                was thrown and the result of the pitch. From that it will build the statistics 
                of the hitter and display them to the user above plate view so that the user
                has a sense of how the hitter is doing.
            </p>
            {/*Add an image of hitter view*/}
        </div>
      </div>
      {/*Why this app was created*/}
      <div className='container-lg' id='textContainer'>
        <div className='d-flex justify-content-center pt-5 p-3 mt-5'>
            <h1 id='description'>WHY WAS THIS WEBAPP CREATED</h1>
        </div>
        <div className='d-flex flex-column justify-content-start p-3'>
            <p className='pb-4' id='text'>
                As a former college baseball player with a B.S. in computer science, I decided to create
                a fun app that ties together a big part of what college was to me. As a computer science major I 
                want to keep refining my skills and learning new tools such as React, this being my first
                React app, and developing something that interests me. As a baseball player
                I never fully understood the importance of counts, what zones I hit the ball well in, 
                and pitcher tendencies till very late in my baseball career. So the point of this is to hopefully
                pass on to players and coaches so that they can view what works and what doesn't based on past 
                performances.
            </p>
        </div>
      </div>
      </>
    )
  }
}

export default Home
