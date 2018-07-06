import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const Title =(props,context) =>{
    const {theme:{colorHighlight ,bgPrimary, textPrimary}} =context
	return (
     <div style={{color:textPrimary}}>
     <h1 className='f2 abc'>Robo friends</h1>
     </div>
    )
}

Title.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};
export default Title;