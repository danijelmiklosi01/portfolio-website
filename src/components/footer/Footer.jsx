/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/danijel-mikloši-1b9277231/'><BsLinkedin/></a>
        <a href='https://github.com/danijelmiklosi01'><FaGithub/></a>
        <a href='https://www.instagram.com/danijeelm'><FaInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Danijel Mikloši. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer