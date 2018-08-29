import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-scroll'

const styles = {
  navButtons: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1em',
    color: 'white'
  }
}
const Navbar = props => (
  <nav id="nav">
    <Button >
      <Link
        to="aboutAbout"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        offset={-180}
        onClick={props.showNav}
      >
        <h2 style={styles.navButtons}> <b> About </b></h2>
      </Link>
    </Button>
    <Button href="/images/Abigail_Resume.pdf">
      <h2 style={styles.navButtons}>Resume</h2>
    </Button>
    <Button>
      <Link
        to="portfolioHeader"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        onClick={props.showNav}
      >
        <h2 style={styles.navButtons}><b> Portfolio </b></h2>
      </Link>
    </Button>
    <Button>
      <Link
        to="contact"
        activeClass="active"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
        onClick={props.showNav}
      >
        <h2 style={styles.navButtons}><b> Contact </b></h2> 
      </Link>
    </Button>
  </nav>

)

export default Navbar
