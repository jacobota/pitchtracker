import React, { Component } from 'react'
import './Footer.css';

export class Footer extends Component {
  render() {
    return (
      <footer className='bg-dark mb-0' id='foot'>
        <div className='d-flex justify-content-center pt-4 pb-2' id='containerfooter'>
            <a href="/" id='footerText'>Home</a>
            <a href='/pitchers' id='footerText'>Pitchers</a>
            <a href='/hitters' id='footerText'>Hitters</a>
            <a href='/signin' id='footerText'>Sign-in</a>
        </div>
        <div className='d-flex justify-content-center pb-3'>
            <h1 id='footerText'>&copy; 2022</h1>
        </div>
      </footer>
    )
  }
}

export default Footer
