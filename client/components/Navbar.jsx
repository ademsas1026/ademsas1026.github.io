import React, { Component } from 'react'
import { Link } from 'react-scroll'

export default class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      showTech: false
    }
    this.showTech = this.showTech.bind(this)
  }

  showTech() {
    const { showTech } = this.state
    this.setState({ showTech: !showTech })
  }

  render() {
    const technologies = {
      proficient: ['Javascript/ES6', 'Node', 'React', 'Redux', 'Express', 'Git'],
      knowledgeable: ['Socket.io', 'Webpack', 'Firebase', 'Sequelize / ORMs', 'Mocha', 'Chai'],
      familiar: ['Material-UI', 'Heroku']
    }
    const { showTech } = this.state
    return (
      <div id="navbar">
        <nav id={showTech ? 'rowNav' : 'columnNav'}>
          <Link
            onClick={this.props.showNav}
            id="aboutLink" to="aboutAbout"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500} 
          >
            <h3>
              <b> About </b>
            </h3>
          </Link>
          <a id="techLink" onClick={this.showTech}><h3>Tech</h3></a>
          <Link
            onClick={this.props.showNav}
            to="portfolioHeader"
            id="portfolioLink"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500} 
          >
            <h3>
              <b> Portfolio </b>
            </h3>
          </Link>
          <Link
            onClick={this.props.showNav}
            to="contactHeader"
            id="contactLink"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500} 
          >
            <h3>
              <b> Contact </b>
            </h3>
          </Link>
        </nav>
        { showTech &&
            <div id="techList">
              <ul>
                <h3><u>Proficient</u></h3>
                <br />
                { technologies.proficient.map(tech => <li>{tech}</li>)}
              </ul>
              <ul>
                <h3><u>Knowledgeable</u></h3>
                <br />
                { technologies.knowledgeable.map(tech => <li>{tech}</li>)}
              </ul>
              <ul>
                <h3><u>Familiar</u></h3>
                <br />
                { technologies.familiar.map(tech => <li>{tech}</li>)}
              </ul>
            </div>
        }
      </div>
    )
  }
}
