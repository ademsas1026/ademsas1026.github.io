import React, { Component } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
const projects = [
  {
    name: 'Not Alone',
    githubLink: 'https://github.com/ademsas1026/we-are-not-alone',
    deployLink: 'https://not-alone-1949.firebaseapp.com/',
    screenShot: './images/screenshot-not-alone-1.png',
    description: `a visualization of UFO sightings from 1950 - 2013, data furnished by the National UFO Reporting Center (NUFORC). Built with Mapbox, React, k-means clustering-based word frequency analysis, data visualization with Victory.`,
    technologies: ['Mapbox', 'Node', 'React', 'Victory']
  },
  {
    name: 'Mahazay',
    githubLink: 'https://github.com/JARLcodes/mahazay-two',
    deployLink: 'https://mahazay-c248c.firebaseapp.com/',
    screenShot: './images/screenshot-mahazay-1.png',
    description: `a smart bullet journal with habit-tracking and sentiment analysis made possible by IBM Watson, media storage with Google Cloud Storage, fast queries and realtime data updates courtesy of Google Firestore, and React + Material-UI for an interactive, modular, and responsive front-end.`,
    technologies: ['Node', 'Firebase / NOSQL Database', 'IBM Watson API integration', 'Data visualization', 'React']
  },
  {
    name: 'Chronos',
    githubLink: 'https://github.com/ademsas1026/Chronos',
    deployLink: 'https://we-are-chronos.herokuapp.com/',
    screenShot: './images/screenshot-chronos.png',
    description: 'a fully-featured e-commerce store unbound by the limits of reality. Want a slice of the Renaissance? Another chance at a great first date? Check out Chronos! Built with Node, Express, Sequelize, and React.',
    technologies: ['Node', 'Express', 'Sequelize', 'React']
  }
]


const Portfolio = () =>  (
    <div id="allPortfolio">
      <h2 id="portfolioHeader">My Work</h2>
      <img className="divider" src="images/line.png" />
      <Grid container spacing={8} id="portfolio">
        { projects.length && projects.map(project => (
            <Grid item xs={12} sm={6} key={project.name} id="gridItem">
            <a href={project.deployLink}><h2 id="title">{project.name}</h2></a>
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


export default Portfolio

