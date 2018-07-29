import React, { Component } from 'react'
import { Portfolio, Contact, Sidebar, Navbar, About } from './components'
import { Events, animateScroll as scroll } from 'react-scroll'


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

    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function () {
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
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  showNav(){
    this.setState(prevState => { return {showNav: !prevState.showNav} })
  }

  

  render(){
    const { showNav } = this.state
    return (
      <div id="appStyle">
        { showNav && <Navbar
                        showNav={this.showNav}
                      />
        }
        
        <section id="sidebar">
          <img src="/images/me.jpg" alt="me" id="headshot" />
          <br />
          <h1 id="titleHeading">Abigail Demsas</h1>
          <h2 id="titleSubheading">Software Developer</h2>
          <Sidebar />
        </section>
        <a onClick={this.showNav} id="navButton"><h3>Menu</h3></a>
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
    )
  }
}

export default App
