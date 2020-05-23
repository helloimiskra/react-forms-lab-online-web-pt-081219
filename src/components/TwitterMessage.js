import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleMaxChar = () =>{
    let maxC = this.props.maxChars
    let currentC = maxC - this.state.message.length
    return(
      <div>
        <h3>{currentC}</h3>
      </div>
    )

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        onChange = {event => this.handleChange(event)}
        value = {this.state.message}
        name="message" 
        id="message" 
        />
         {this.handleMaxChar()}
      </div>
     
    );
  }
}

export default TwitterMessage;
