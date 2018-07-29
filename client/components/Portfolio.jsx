import React, { Component } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'



export default class Portfolio extends Component {
  constructor(){
    super()

  }
  seeNav(){
    this.props.history.push('/nav')
  }


  render() {
  
    const projects = [
      {
        name: 'We Are Not Alone',
        githubLink: 'https://github.com/ademsas1026/we-are-not-alone',
        deployLink: 'https://we-are-not-alone.herokuapp.com/',
        screenShot: './images/screenshot-not-alone-1.png',
        description: `We Are Not Alone: a visualization of UFO sightings from 1950 - 2013, data furnished by the National UFO Reporting Center (NUFORC). Built with Mapbox, React, k-means clustering-based word frequency analysis, data visualization with Victory.`,
        technologies: ['Mapbox', 'Node', 'React', 'Victory']
      },
      {
        name: 'Mahazay',
        githubLink: 'https://github.com/JARLcodes/mahazay-two',
        deployLink: 'https://mahazay-c248c.firebaseapp.com/',
        screenShot: './images/screenshot-mahazay-1.png',
        description: 'Mahazay: a smart bullet journaling app built with Firestore, Google Cloud Functions and IBM Watson Personality and Tone Analyzer on the backend & Victory and React on the front.',
        technologies: ['Node', 'Firebase / NOSQL Database', 'IBM Watson API integration', 'Data visualization', 'React']
      },
      {
        name: 'Chronos',
        githubLink: 'https://github.com/ademsas1026/Chronos',
        deployLink: 'https://we-are-chronos.herokuapp.com/',
        screenShot: './images/screenshot-chronos.png',
        description: 'Chronos: a fully-featured e-commerce store unbound by the limits of reality. Want a slice of the Renaissance? Another chance at a great first date? Check out Chronos! Built with Node, Express, Sequelize, and React.',
        technologies: ['Node', 'Express', 'Sequelize', 'React']
      }
    ]
    return (
      <div id="allPortfolio">
        <h2 id="portfolioHeader">Portfolio</h2>
        <Grid container spacing={24} id="portfolio">
          { projects.length && projects.map(project => (
              
              <Grid item xs={12} sm={6} key={project.name} id="gridItem">
                <nav>
                  <a href={project.githubLink} id="githubLink"><img src="/images/github.svg" id="githubIcon" /></a>
                  <a href={project.deployLink} id="deployLink"><img src="/images/globe.png" id="globeIcon" /></a>
                </nav>
                <div id="image">
                  <img src={project.screenShot} className={`screenshot ${project.name}`} />
                  <h3 id="description">{project.description}</h3>
                </div>
               
              </Grid>
              ))
          }
        </Grid>
      </div>
    )
  }
}

