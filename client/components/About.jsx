import React from 'react'
import { Link } from 'react-scroll'

const About = () =>  (
  <div id="bioAbout">
      <div>
        <div id="aboutAbout">
          <br />
          <br />
          Hi! I'm Abigail, a fullstack web developer based in New York.
          <br/>
          <br/>
            <h3 id="subAbout">
            I've always loved digging in to new topics and
            finding clear solutions to real problems that
            affect real people.
            In the past, I've funneled these interests into
            neuroscience research into the mechanisms underlying
            stress / anxiety and medical case management for New
            Yorkers affected by HIV/AIDS and other chronic conditions.
            Over the past year, I've switched gears to software development
            and would love to find a home for these passions.
            <br />
            <br />
            I'm comfortable throughout the stack, and I'm 
            particularly interested in developing applications 
            with a measurable and humane social impact. 
            I currently mentor at a web development bootcamp 
            that caters to women and non-binary individuals.
            <br />
            <br />
            You can find me coding around the city and at various meetups. 
            To get in touch, you can contact me
            <b> </b>
            <Link
                to="contact"
                activeClass="active"
                spy={true}
                smooth={true}
                duration={500}
                id="contactLink"
              >here.
            </Link>
          </h3>
        </div>
      </div>
  </div>
)


export default About

