import React, { Component } from 'react';
import PropTypes from 'prop-types';



class SwitchButton extends Component {
  constructor(props) {
    super(props);
   
  }

  render() {
    const {
      theme: { name },
      switchTheme
    } = this.context;

  
    return (
      
        <div className="size pa4" onClick={(e) => switchTheme()}>
          <button className="f6 link dim ba ph3 pv2 mb2 dib dark-pink" href="#" />
          <div >{name}</div>
        </div>
        
    );
  }
}

SwitchButton.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default SwitchButton;