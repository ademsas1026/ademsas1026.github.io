import React, { Component } from 'react'
import { Button, TextField, FormHelperText, Typography } from '@material-ui/core'

export default class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      nameSubmitted: false,
      nameWarning: false,
      email: '',
      emailSubmitted: false,
      emailWarning: false,
      message: '',
      messageWarning: false
    }
  }


  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  submitName(event){
    if (event.keyCode === 9){
      this.state.name.length
      ? this.setState({ nameSubmitted: true, nameWarning: false })
      : this.setState({ nameWarning: true });
    }

  }

  submitEmail(event){
    if (event.keyCode === 13){
      console.log('submitting email')
      this.state.email.length
      ? this.setState({ emailSubmitted: true, emailWarning: false })
      : this.setState({ emailWarning: true });
    }
  }

  submitMessage(event){
    if (event.keyCode === 13) {
     this.state.message.length
     ? this.setState({ messageWarning: false })
     : this.setState({ messageWarning: true })
    }
  }

  render() {
    const {  nameWarning, emailWarning, messageWarning } = this.state

    return (
      <div id="contact">
        <div id="contactHeader">
          <h2 id="contactTitle">Email Me</h2>
          <img src="images/line.png" alt="divider" />
          <Typography variant="body1">Looking for a developer? Let's talk!</Typography>
        </div>
        <form id="contactform" method="POST" action="https://formspree.io/abigail.demsas.codes@gmail.com">
        { nameWarning && <FormHelperText id="name-helper-text">Please enter your name</FormHelperText>}
          <TextField
              style={{ margin: '0% 0% 5% 0%', backgroundColor: 'white', borderRadius: '5%', padding: '0.5em', opacity: '0.8' }}
              type="text"
              onChange={this.handleChange.bind(this)}
              name="name"
              placeholder="your name"
              onKeyDown={this.submitName}
              />

          { emailWarning && <FormHelperText id="name-helper-text">Please enter your email</FormHelperText>}
          <TextField
            type="email"
            style={{ margin: '0% 0% 5% 0%', backgroundColor: 'white', borderRadius: '5%', padding: '0.5em', opacity: '0.8' }}
            onChange={this.handleChange.bind(this)}
            placeholder="your email address"
            name="email"
          />
          
          { messageWarning && <FormHelperText id="name-helper-text">Please enter a message</FormHelperText>}
          <TextField
              style={{ margin: '0% 0% 5% 0%', backgroundColor: 'white', borderRadius: '5%', padding: '0.5em', opacity: '0.8' }}
              onChange={this.handleChange.bind(this)}
              placeholder="let's talk!"
              name="message"
              multiline="true"
            />

          <Button type="submit" id="submitEmail">Send</Button>
        </form>
        <div id="alternateContact">
          <Button id="linkedInButton" href="https://linkedin.com/in/abigail-demsas"><img src="/images/linkedin.svg" id="linkedInIcon"/></Button>
          <Button id="githubButton" href="https://github.com/ademsas1026"><img src="images/github.svg" id="githubIcon" /></Button>
        </div>
      </div>
    )
  }
}
