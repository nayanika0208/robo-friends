import React from 'react';
import PropTypes from 'prop-types';


const Searchbox=(props,context) =>{
	const {searchfield , searchChange}=props
	const {theme:{colorHighlight}} =context
	return (
		<div className ='pa2'>
		<input 
		className ='pa2 ba b--green '
        style={{backgroundColor:colorHighlight}}
		type ='search' 
		placeholder ='search robots'
		onChange= {searchChange}
		/>
		</div>
		);
}
Searchbox.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};

export default Searchbox;
