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
				days.push(<Day key={index.toString()} month={month} day={day}/>);
		});

		return(
				<div  style={ style.holder }>
						<div className = "panel panel-success" style={style.panelHolder}>
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


	const style = {
		holder: {
			margin: 'auto',
			width: '700px' ,
			boxShadow: '0px 0px 55px -9px rgba(0,0,0,0.75)'
		},
		panelHolder: {
			border: '0px solid white',
			width: '700px' 
		}
	}