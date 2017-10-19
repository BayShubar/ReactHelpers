import React from 'react'
import { connect } from 'react-redux'
import { toShow } from '../../store/action/CalendarAction' 

class Day extends React.Component{

	render(){
		const day = this.props.day;
		const toDetailShow = {
			month: this.props.month,
			day: day
		}

		const color = (day.empty)?{back: "#93A12D", text: 'white'}:{back: "rgb(255, 120, 86)", text: 'white'};
		const emptyDay = <p style={ style.infoEmpty }>Free</p>;
		const notEmptyDay = <p style={style.info}> {day.city}</p>;
		const info = (day.empty)? emptyDay: notEmptyDay;
		return(
				<div className="col-md-2" style={style.dayHolder} onClick={()=>this.props.onShow(toDetailShow)}>	
					<p style={style.dayDate}>
							<a>
								<span className="badge" style={{ backgroundColor:color.back, color: color.text}}>
									<p style={style.dayDate}>{day.date}</p></span>
							</a>
					</p>
					{info}
				</div>
			)
	}
}

export default connect(
		state=>({}),
		dispatch=>({
			onShow: (day)=>{
				 dispatch(toShow(day));
			}
		})
	)(Day);


	const style = {
		dayHolder: { 
			border: '1px solid white', 
			height: '70px', 
			backgroundColor: "white",
			borderRight: '1px solid #FF5A5F',
			borderBottom: '1px solid #FF5A5F',
		},
		dayDate: { 
			fontSize:'20px',
			textAlign:'center', 
			textAlign: 'right',
			marginBottom: '0px',
			marginTop: '2px',
		},
		info: { 
			fontSize:'15px', 
			textAlign:'center', 
			color: '#FF5A5F',
			marginTop: '10px',
		},
		infoEmpty: {
			fontSize:'15px', 
			textAlign:'center', 
			color: '#93A12D',
			marginTop: '10px',

		}
	}