import React from 'react'
import { connect } from 'react-redux'
import {toNextMonth, toPreviousMonth} from '../../store/action/CalendarAction'

class CalendarHeading extends React.Component{

	render(){
		const month = this.props.month;
		return(
					<div className="panel-heading" style={style.heading}>
							<h3 style={style.headingMonth}>{month.name}</h3>
							<div style={style.headingBtn}>
									<button style={ style.moveBtn } 
										onClick={()=>{this.props.onPreviousMonth(month.id)}} >
										<span className="glyphicon glyphicon-chevron-left"></span>
									</button>

									<button style={ style.moveBtn } 
											onClick={()=>this.props.onNextMonth(month.id)}>
										<span className="glyphicon glyphicon-chevron-right"></span>
									</button>

								</div>
					</div>
			)
	}
}

export default connect(
		state=>({
			calendar: state.Calendar
		}),
		dispatch=>({
			onNextMonth: (id)=>{
				dispatch(toNextMonth(id));
			}, 

			onPreviousMonth: (id)=>{
				dispatch(toPreviousMonth(id));
			}
		})
	)(CalendarHeading);



	const style = {
		heading: {
			backgroundColor: 'white',
			border: '1px solid white',
			borderBottom: '10px solid #FF5A5F'
		},
		headingMonth: {
			display: "inline-block",
			color: '#FF5A5F',
	    whiteSpace: 'nowrap',
	    fontSize: '32px',
	    fontWeight: '100',
	    marginBottom: '10px',
	    fontFamily:"Roboto, sans-serif",
		},
		moveBtn: {
			backgroundColor: 'white',
			border: '1px solid #FF5A5F',
			borderRadius: '5px',
			padding: '3px 20px',
			color: '#FF5A5F'
		},
		headingBtn: {
			float: 'right',
			display: "inline-block",
			marginTop: '25px'
		},
	}