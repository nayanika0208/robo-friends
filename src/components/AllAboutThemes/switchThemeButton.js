import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './switch.css'



class SwitchButton extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    const {
      theme: { name ,textPrimary, },
      switchTheme
    } = this.context;

  
    return (
     
        <div className="pa4 grow" >
          <div className="f4 i b baskerville  poi"style={{color:textPrimary}} onClick={(e) => switchTheme()}>{name}</div>
        </div>
      
        
    );
  }
}

SwitchButton.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default SwitchButton;