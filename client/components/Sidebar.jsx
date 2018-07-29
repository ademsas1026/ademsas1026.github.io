import React, { Component } from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-scroll'

const styles = {
  rowNav: {
    fontFamily: 'Montserrat, sans-serif', 
    fontSize: '1.5em'
  },
  colNav: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '2.5em'
  }
}
const Sidebar = () => (
  <div id="nav">
    <nav id="columnNav">
      <Button>
        <Link
          to="aboutAbout"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h2 style={styles.colNav}> <b> About </b></h2>
        </Link>
      </Button>
      <Button href="/images/Abigail_Resume.pdf">
        <h2 style={styles.colNav}>Resume</h2>
      </Button>
      <Button>
        <Link
          to="portfolioHeader"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h2 style={styles.colNav}><b> Portfolio </b></h2>
        </Link>
      </Button>
      <Button>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <h2 style={styles.colNav}><b> Contact </b></h2> 
        </Link>
      </Button>
    </nav>
  </div>
)

export default Sidebar
