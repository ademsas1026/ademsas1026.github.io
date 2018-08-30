import React from 'react'
import { Link } from 'react-scroll'

const styles = {
  bigScreenSection: {
    maxWidth: '25vw',
    margin: '0'
  },
  smallScreenSection: {
    width: '80vw'
  }
}
const About = props => {
  let { showCurious, showInterests, showFindMe } = props

  return (
    <div id="bioAbout">
        <div>
          <div id="aboutAbout">
          { window.innerWidth > 480 &&
            <h2 id="aboutHead">Hi! I'm <a id="name" onClick={() => props.showMore('all')}>Abigail,</a> a fullstack developer based in New York.</h2>
          }
            <br />
            <br />
            <section id="aboutBody">
              <section className="section">
                <h2>
                  I'm <a onClick={() => props.showMore('Curious')} className="aboutHeader">curious</a>
                </h2>
                {!showCurious && <img className="divider" src="images/line.png" />}
                {showCurious &&
                  <h3 id="curious" style={window.innerWidth > 480 ? styles.bigScreenSection : styles.smallScreenSection }>
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
              </section>
              <br />
              <section className="section">
                <h2>
                  I'm <a onClick={() => props.showMore('Interests')} className="aboutHeader">thoughtful</a>
                </h2>
                {!showInterests && <img className="divider" src="images/line.png" />}
                { showInterests &&
                  <h3 id="interests" style={window.innerWidth > 480 ? styles.bigScreenSection : styles.smallScreenSection }>
                  I'm comfortable throughout the stack, and I'm 
                  particularly interested in developing applications 
                  with a measurable and humane social impact. 
                  I currently mentor at a web development bootcamp 
                  that caters to women and non-binary individuals.
                  </h3>
                }
              </section>
              <br />
              <section className="section">
                <h2>
                  I'm <a onClick={() => props.showMore('FindMe')} className="aboutHeader">reachable!</a>
                </h2>
                {!showFindMe && <img className="divider" src="images/line.png" />}
                { showFindMe &&
                  <h3 id="findMe" style={window.innerWidth > 480 ? styles.bigScreenSection : styles.smallScreenSection }>
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
              </section>
            </section>
          </div>
        </div>
    </div>
  )
  
}



export default About