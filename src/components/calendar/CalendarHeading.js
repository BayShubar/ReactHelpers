import React from 'react'
import { connect } from 'react-redux'
import {toNextMonth, toPreviousMonth} from '../../store/action/CalendarAction'

class CalendarHeading extends React.Component{

	render(){
		const month = this.props.month;
		return(
					<div className="panel-heading">{month.name}
						<div className="pull-right">
							<button className="btn btn-success btn-xs" 
								onClick={()=>{this.props.onPreviousMonth(month.id)}} 
								style={{ marginRight: '5px' }}>
								<span className="glyphicon glyphicon-chevron-left"></span>
							</button>

							<button className="btn btn-success btn-xs" 
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