import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-scroll'

const styles = {
  navButtons: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1em'
  }
}
const Navbar = props => (
  <nav id="nav">
  { window.innerWidth > 480 &&
    <Button id="nameNav" style={{fontSize: '2em'}} onClick={props.scrollToTop}>Abigail Demsas</Button>
  }
    <div id="leftNav">
      <Button>
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
      <img className="divider" src="images/line.png" />
      <Button href="/images/Abigail_Resume.pdf">
        <h2 style={styles.navButtons}>Resume</h2>
      </Button>
      <img className="divider" src="images/line.png" />
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
      <img className="divider" src="images/line.png" />
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
    </div>
  </nav>

)

export default Navbar
