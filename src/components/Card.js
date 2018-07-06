import React from 'react';
import PropTypes from 'prop-types';

const Card =(props,context) =>{
	const {name,email,id}=props;
    const {theme:{colorHighlight ,bgPrimary, textPrimary}} =context
	return (
     <div className=" tc  dib ma2 pa3 br3 grow bw2 shadow" style={{backgroundColor:colorHighlight}}>
     <img alt= 'robo 1 'src={ `https://robohash.org/${id}?200x200`}/>
     <div>
    <h1>{name}</h1>
    <p>{email}</p>

     </div>
     </div>
    )
}

Card.contextTypes = {
  theme: PropTypes.any,
  switchTheme: PropTypes.func
};
export default Card;