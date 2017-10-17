import React from 'react'

class Offer extends React.Component{

	render(){
		return(
				<div style={{ padding: '0px 60px 60px 70px' }}>
						<div style={style.textDate}>Offer Deal</div>
					<input style={style.inputBox} type="text" className="form-control" placeholder="City..." /><br/>
					<input style={style.inputBox} type="text" className="form-control" placeholder="Money..." /><br/>
					<input type="submit" className="btn btn-success pull-right" value="Offer" style={style.offerBtn} />
				</div>
			)
	}
}

export default Offer;


	const style = {
		offerBtn:{
			backgroundColor: 'white',
			border: '1px solid #FF5A5F',
			borderRadius: '5px',
			padding: '3px 20px',
			color: '#FF5A5F',
			marginTop: '10px',
		},
		textDate:{
			padding:'2px 15px',
			margin:'3px',
			color: '#FF5A5F',
			display:'inline-block',
			fontSize:'20px',
		}	,
		inputBox:{
			border: '1px solid #FF5A5F',
		}
	}