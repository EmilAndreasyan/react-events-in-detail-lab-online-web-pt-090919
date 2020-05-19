// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props){
    super(props)
  }
  
  render(){
    return (
    <button onClick={this.handleCoordinates}>Receive coordinates</button>  
    )
  }
  
  handleCoordinates = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  
}
