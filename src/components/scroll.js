import React from 'react';
import PropTypes from 'prop-types';

const Scroll =(props) =>{
	return (
		<div style ={{ overflow: 'scroll', border : '1px solid black',height:'800px' }}>
		{props.children}
		</div>)

};
Scroll.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};
export default Scroll;
