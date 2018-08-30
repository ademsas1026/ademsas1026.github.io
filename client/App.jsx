import React, { Component } from 'react'
import { Portfolio, Contact, Navbar, About } from './components'
import { Events, animateScroll as scroll } from 'react-scroll'
import Typist from 'react-typist'
import { Button } from '@material-ui/core'

class App extends Component {

  constructor() {
    super()
    this.state = {
      showNav: false,
      showCurious: false,
      showInterests: false,
      showFindMe: false
    }
    this.showNav = this.showNav.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
    this.showMore = this.showMore.bind(this)
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    window.innerWidth > 740 ? this.showNav() : null

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

  showNav() {
    this.setState(prevState => ({ showNav: !prevState.showNav }))
  }

  async showMore(sectionName){
    switch (sectionName){
      case 'Curious':
        this.setState(prevState => ({ showCurious: !prevState.showCurious }))
        break
      case 'Interests':
        this.setState(prevState => ({ showInterests: !prevState.showInterests }))
        break
      case 'FindMe':
        this.setState(prevState => ({ showFindMe: !prevState.showFindMe }))
        break
      case 'all':
        await this.setState(prevState => 
          ({ 
            showFindMe: !prevState.showFindMe,
            showCurious: !prevState.showFindMe,
            showInterests: !prevState.showFindMe 
          }))
         break
      default:
        return null
    }
  }

  
  render(){
    const { showNav } = this.state
    window.innerWidth > 480 && !showNav && this.showNav()
    return (
      <div id="appAndNav">
        <div id="appStyle">
        
          <Button onClick={this.showNav}>
            <img id="navButton" src="images/hamburger.png"/>
          </Button>

          { showNav &&  <Navbar showNav={this.showNav} scrollToTop={this.scrollToTop} />}
          <div id="landingPage">
            
              <p className="welcome heading">
                Hi! I'm <a id="name" onClick={() => this.showMore('all')} className="aboutHeader">Abigail.</a>
              </p>
              <p className="welcome subheading">
                I'm a fullstack web developer based in New York.
              </p>
      
          </div>
         
         
          <section id="content">
              
              <div className="about" name="about">
                <About showMore={this.showMore} showCurious={this.state.showCurious} showFindMe={this.state.showFindMe} showInterests={this.state.showInterests}/>
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
