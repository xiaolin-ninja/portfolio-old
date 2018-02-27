import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import sr from './scrollReveal.js';

class Experiences extends Component {
  componentDidMount() {
    sr.reveal(this.refs.header, {reset:true, viewFactor: 0.4, useDelay: 'onload'})
  }
  render() {
  	const styles =
  	  {
  	  }

  	return (
  	  <section className='Experiences'>
        <div className='header' ref='header' style={styles}>Experiences</div>
        <Grid fluid>
          <Row>
            <Col className='noPad' xs={12} sm={4}><Box url='https://www.kudolife.com' bg='./assets/kudolifebg.jpg' logo='./assets/prizmmedialogo.png' description='Junior Software Developer' /></Col>
            <Col className='noPad' xs={12} sm={4}><Box url='http://lc.landfood.ubc.ca' bg='./assets/ubcbg.jpg' logo='./assets/ubclogo.png' description='IT Tech Support' /></Col>
            <Col className='noPad' xs={12} sm={4}><Box url='https://fusionpipe.com' bg='./assets/fusionpipebg.jpg' logo='./assets/fusionpipelogo.png' description='Multi-Factor Authentication' /></Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

class Box extends Component {
  openNew(url) {
      window.open(url);
  };

  componentDidMount() {
    sr.reveal(this.refs.box, {reset: true, useDelay: 'onload'});
  };

  render() {
    return (
      <div ref='box'>
        <div className='circleWrapper'>
          <img className='circleBgWrapper' src={require(this.props.bg)}  alt=''/>
          <div className='circleContentWrapper clickable' onClick={() => this.openNew(this.props.url)}>
           <img className='logoWrapper' src={require(this.props.logo)} alt=''/>
          </div>
          </div>
        </div>
  	);
  }
}

export default Experiences;