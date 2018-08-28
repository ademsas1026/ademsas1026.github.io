import React, { Component } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
const projects = [
  {
    name: 'Not Alone',
    githubLink: 'https://github.com/ademsas1026/we-are-not-alone',
    deployLink: 'https://not-alone-1949.firebaseapp.com/',
    screenShot: './images/screenshot-not-alone-1.png',
    description: `a visualization of UFO sightings from 1949 - 2013, data furnished by the National UFO Reporting Center (NUFORC). Built with Mapbox, React, k-means clustering-based word frequency analysis, data visualization with Victory.`,
    technologies: ['Mapbox', 'Node', 'React', 'Victory']
  },
  {
    name: 'Mahazay',
    githubLink: 'https://github.com/JARLcodes/mahazay-two',
    deployLink: 'https://mahazay-c248c.firebaseapp.com/',
    screenShot: './images/screenshot-mahazay-1.png',
    description: 'a smart bullet journaling app built with Firestore, Google Cloud Functions and IBM Watson Personality and Tone Analyzer on the backend & Victory and React on the front.',
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
    <div id="portfolioHeader">
      <h2>My Work</h2>
      <img src="images/line.png" alt="divider" />
      <Typography variant="body1">Some past projects</Typography>
    </div>
    <Grid container spacing={24} id="portfolio">
      { projects.length && projects.map(project => (
        <Grid item xs={6} sm={3} key={project.name} id="portfolioItem">
          <img src={project.screenShot} id="screenshot" />
          <a href={project.deployLink}><h4>{project.name}</h4></a>
          <h5>{project.description}</h5>
          <nav>
            <a href={project.githubLink}><img src="images/github.svg" alt="github" id="github"/></a>
            <a href={project.deployLink}><img src="images/globe.png" alt="deployed site" id="deploy"/></a>
          </nav>
        </Grid>
      ))}
    </Grid>
  </div>
  )


export default Portfolio

