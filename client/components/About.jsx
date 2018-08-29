import React from 'react'
import { Link } from 'react-scroll'

const About = props => {
  const { showCurious, showInterests, showFindMe } = props
  return (
    <div id="bioAbout">
        <div>
          <div id="aboutAbout">
          { window.innerWidth > 740 &&
            <h2>Hi, welcome to my site! I'm <a id="name" onClick={() => props.showMore('all')}>Abigail,</a> a fullstack developer based in New York.</h2>
          }
            <br />
            <br />
              <h2>
                I'm <a onClick={() => props.showMore('Curious')} className="aboutHeader">curious</a>
              </h2>
              {!showCurious && <img className="divider" src="images/line.png" />}
              {showCurious &&
                <h3 id="curious" style={{width: '80vw'}}>
                  I've always loved digging in to new topics and
                  finding clear solutions to real problems that
                  affect real people. In the past, I've funneled these interests into
                  neuroscience research into the mechanisms underlying
                  stress / anxiety and medical case management for New
                  Yorkers affected by HIV/AIDS and other chronic conditions.
                  Over the past year, I've switched gears to software development
                  and would love to find a home for these passions.
                </h3>
              }
              <br />
              <h2>
                I'm <a onClick={() => props.showMore('Interests')} className="aboutHeader">thoughtful</a>
              </h2>
              {!showInterests && <img className="divider" src="images/line.png" />}
              { showInterests &&
                <h3 id="interests" style={{width: '80vw'}}>
                I'm comfortable throughout the stack, and I'm 
                particularly interested in developing applications 
                with a measurable and humane social impact. 
                I currently mentor at a web development bootcamp 
                that caters to women and non-binary individuals.
                </h3>
              }
              <br />
              <h2>
                I'm <a onClick={() => props.showMore('FindMe')} className="aboutHeader">reachable!</a>
              </h2>
              { showFindMe &&
                <h3 id="findMe" style={{width: '80vw'}}>
                  You can find me coding around the city and at various meetups. 
                  To get in touch, you can contact me
                  <Link
                    to="contact"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    duration={500}
                    id="contactLink"
                  >
                    here.
                  </Link>
                </h3>
              }
              
          </div>
        </div>
    </div>
  )
  
}



export default About