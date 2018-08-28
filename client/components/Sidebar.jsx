import React from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-scroll'

const styles = {
  navButtons: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '1.5em',
    color: 'white'
  }
}
const Sidebar = () => (
  <div id="nav">
    <Button id="name">Abigail Demsas</Button>
    <nav id="navButtons">
      <Button>
        <Link
          to="aboutAbout"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-180}
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
        >
          <h2 style={styles.navButtons} onMouseOver><b> Work </b></h2>
        </Link>
      </Button>
      <Button>
        <Link
          to="contactWithoutBackground"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <h2 style={styles.navButtons}><b> Contact </b></h2> 
        </Link>
      </Button>
    </nav>
  </div>
)

export default Sidebar
