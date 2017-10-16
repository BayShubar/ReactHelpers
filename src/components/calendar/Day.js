import React from 'react'
import { connect } from 'react-redux'

class Day extends React.Component{

	render(){
		const day = this.props.day;
		const color = (day.empty)?"#2BB94C":"rgb(255, 120, 86)";

		const emptyDay = <p style={{ textAlign:'center', marginTop: '-15px', color:'white' }}>
																					<span className="glyphicon glyphicon-ok"></span></p>;
		const notEmptyDay = <p style={{ fontSize:'15px', textAlign:'center', color: 'white',
																										 marginTop: '-17px'}}> {day.city}</p>;
		const info = (day.empty)? emptyDay: notEmptyDay;

		return(
				<div className="col-md-2" style={{ border: '1px solid white', height: '43px', 
					backgroundColor: color, border: '1px solid white'  }}>	
					<p style={{ fontSize:'20px', textAlign:'center', color: 'white'}}>
							<a onClick={()=>this.props.onShow(day)} style={{ color: 'white' }}>{day.date}</a></p>
					{info}
				</div>
			)
	}
}

export default connect(
		state=>({}),
		dispatch=>({
			onShow: (day)=>{
				console.log('in Day ERROR');
				 dispatch({type:"DAY_SHOW", day:"Sdcsdc"})
			}
		})
	)(Day);