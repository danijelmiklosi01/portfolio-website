import React from 'react'
import './about.css'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="about__content">
        <p>
          Hello! I'm Danijel and I love computer science. As I approach the end of my computer science degree, I've been looking back on the amazing journey it has been. During my time in school, I've explored different areas of computer science, expanding my knowledge and improving my abilities.
        </p>
        <p>
          My interest in technology started when I attended "Mihajlo Pupin" Electrical School, where I learned about electronics and engineering. This experience sparked my love for finding solutions and creating new ideas, leading me to pursue a career in computer science.
        </p>
        <p>
          Throughout my academic journey, I have sought out real-world opportunities to enhance my learning beyond just theory. I have been fortunate enough to participate in three valuable internships, each providing me with a different perspective of the field. These experiences have not only improved my technical skills but have also taught me how to effectively adapt and solve problems.
        </p>
        <p>
          If you'd like to discuss about possible business ventures. Simply click the "Let's Talk" button below to connect with me.
        </p>
        <br></br>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>
    </section>
  )
}

export default About