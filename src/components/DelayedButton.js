// Code DelayedButton Component Here

import React from 'react';

export default class DelayedButton extends React.Component {
  
  render(){
    return (
    <button onClick={this.handleDelay}>Delayed</button>  
    )
  }
  
  handleDelay = () => {
    
  }
  
}
