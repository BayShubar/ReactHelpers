import React from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import {toNextMonth} from '../../store/action/CalendarAction'

class CalendarHolder extends React.Component{

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
							<button className="btn btn-success btn-xs" style={{ marginRight: '5px' }}>
								<span className="glyphicon glyphicon-chevron-left"></span></button>
							<button className="btn btn-success btn-xs" onClick={this.props.onNextMonth}>
								<span className="glyphicon glyphicon-chevron-right"></span></button>
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
				dispatch(toNextMonth());
			}
		})
	)(CalendarHolder);