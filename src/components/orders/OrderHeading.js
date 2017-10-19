import React from 'react'

class OrderHeading extends React.Component{

	render(){
		return(
				<div style={style.heading}>
						<h3 style={style.headingName}>Duisebay Yerkebulan</h3>
				</div>
			)
	}
}

export default OrderHeading;

const style = {
		heading: {
			backgroundColor: 'white',
			border: '1px solid white',
			borderBottom: '10px solid #FF5A5F'
		},
		headingBtn: {
			float: 'right',
			display: "inline-block",
			marginTop: '25px'
		},
		headingName: {
			display: "inline-block",
			color: '#FF5A5F',
	    whiteSpace: 'nowrap',
	    fontSize: '20px',
	    fontWeight: '100',
	    margin: '10px',
	    fontFamily:"Roboto, sans-serif",
		},
		moveBtn: {
			backgroundColor: 'white',
			border: '1px solid #FF5A5F',
			borderRadius: '5px',
			padding: '3px 20px',
			color: '#FF5A5F'
		}
}