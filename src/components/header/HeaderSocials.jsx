import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/danijel-mikloši-1b9277231/' target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/danijelmiklosi01' target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/danijeelm' target="_blank" rel="noreferrer"><FaInstagram/></a>
    </div>
  )
}

export default HeaderSocials