import React from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import {toNextMonth, toCurrentMonth, toPreviousMonth} from '../../store/action/CalendarAction'

class CalendarHolder extends React.Component{
	componentDidMount(){
		this.props.onCurrentMonth();
	}
	render(){
		const days = [];
		const monthName = this.props.calendar.month;
		const monthDays = this.props.calendar.days;

		monthDays.map((day, index)=>{
				days.push(<Day key={index.toString()} day={day}/>);
		});

		return(
				<div className = "panel panel-success" style={{ margin: 'auto', width: '500px' }}>
					<div className="panel-heading">{monthName}
						<div className="pull-right">
							<button className="btn btn-success btn-xs" 
								onClick={()=>{this.props.onPreviousMonth(this.props.calendar.id)}} 
								style={{ marginRight: '5px' }}>
								<span className="glyphicon glyphicon-chevron-left"></span>
							</button>

							<button className="btn btn-success btn-xs" 
									onClick={()=>this.props.onNextMonth(this.props.calendar.id)}>
								<span className="glyphicon glyphicon-chevron-right"></span>
							</button>

						</div>
					</div>
					<div className="panel-body">
						{days}
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
			},

			onCurrentMonth: ()=>{
					dispatch(toCurrentMonth());
			}
		})
	)(CalendarHolder);