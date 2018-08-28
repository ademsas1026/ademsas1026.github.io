import React, { Component } from 'react'
import { Portfolio, Contact, Sidebar, Navbar, About } from './components'
import { Events, animateScroll as scroll } from 'react-scroll'
import Typist from 'react-typist'

class App extends Component {

  constructor() {
    super()
    this.state = {
      showNav: false
    }
    this.scrollToTop = this.scrollToTop.bind(this)
    this.showNav = this.showNav.bind(this)
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', () => {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', () => {
      console.log('end', arguments);
    });

  }

  scrollToTop() {
    scroll.scrollToTop()
  }
  
  componentDidUpdate(){
    console.log('updated!')
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  showNav(){
    this.setState(prevState => { 
      return {showNav: !prevState.showNav} 
    })
  }

  

  render(){
    const { showNav } = this.state
    return (
      <div id="appAndNav">
         { showNav && <Navbar
                        showNav={this.showNav}
                      />
        }
        <div id="appStyle">
          <section id="landing">
            <a onClick={this.showNav} id="navButton"><h3>Menu</h3></a>
            <Typist id="welcome" style={{position: 'relative', left: '-90vw'}}>Hi! I'm so happy you made it to my site. Look through the menu to learn more about me and my work.</Typist>
          </section>
          <Sidebar />
          <section id="content">
              
              <div className="about" name="about">
                <About />
              </div>
              <div className="portfolio" name="portfolio">
                <Portfolio />
              </div>
              <div className="contact" name="contact">
                <Contact name="contact" scrollToTop={this.scrollToTop}/>
              </div>
          </section>
        </div>
      </div>
    )
  }
}

export default App
