import React from 'react'
import './Header.css'
import './style.css'
import study from '../../assets/Study.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook , faTwitter , faLinkedin} from '@fortawesome/free-brands-svg-icons'



function Header() {
  return (
    <>
    <footer>
        <div className="container">
          <div className="footer-main">
            <div className="footer-about">
              <div className="logo">
                <h1 style={{fontSize: '48px'}}>Study</h1>
              </div>
              <p style={{fontWeight: 600, width: '95%'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, amet. Quaerat, minima. Ducimus, iste.
              </p>
            </div>
            <div className="footer-links">
              <p className="title">Nos services</p>
              <div className="links" style={{fontSize: '14px'}}>
                <a href>Avis clients</a>
                <a href>Mentions légales</a>
                <a href>Plan du site</a>
                <a href>Blog d’Idéematic</a>
                <a href>Le dictionnaire du digital</a>
                <a href>Notre boutique</a>
              </div>
            </div>
            <div className="footer-sign-up">
              <p className="title">Sign up for Special Offers!</p>
              <div className="sign-up">
                <input type="email" name="email" id="email" placeholder="Mail" />
                <button type="submit" className="signupbtn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Header