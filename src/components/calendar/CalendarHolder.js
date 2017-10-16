import React from 'react'
import { connect } from 'react-redux'
import { toCurrentMonth} from '../../store/action/CalendarAction'
import Day from './Day'
import CalendarHeading from './CalendarHeading'
import Show from './Show'


class CalendarHolder extends React.Component{
	componentDidMount(){
		this.props.onCurrentMonth();
	}
	render(){
		const days = [];
		const monthDays = this.props.calendar.days;
		const month = {
					name: this.props.calendar.month,
					id: this.props.calendar.id
				}
		monthDays.map((day, index)=>{
				days.push(<Day key={index.toString()} day={day}/>);
		});

		return(
				<div  style={{ margin: 'auto', width: '500px' }}>
						<div className = "panel panel-success" style={{width: '500px' }}>
							<CalendarHeading month = {month}/>
							<div className="panel-body">
								{days}
							</div>
						</div>

						<Show/>
				</div>
			)
	}
}

export default connect(
		state=>({
			calendar: state.Calendar
		}),
		dispatch=>({
			onCurrentMonth: ()=>{
					dispatch(toCurrentMonth());
			}
		})
	)(CalendarHolder);