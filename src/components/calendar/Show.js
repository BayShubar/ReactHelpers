import React from 'react'
import { connect } from 'react-redux'

import Offer from './Offer'
import ShowInfo from './ShowInfo'

class Show extends React.Component{

	render(){
			const day = this.props.day;
			var offer = <div> </div>;
			var showInfo = <ShowInfo day = {day} />;
			if(day.empty){
				offer = <Offer />
				showInfo = <div> </div>
			}
			var show = <div> </div>;
			if(day.show){ show = 
					<div className="panel panel-success" style={style.holder} >
						<div className="panel-heading" style={style.heading}>
							<div style={style.textDate}>{ day.date } { day.month }</div>
							<button className="btn btn-danger pull-right btn-xs"
								onClick={this.props.onClose} style={style.closeBtn}>
								X
							</button>
						</div>	
						{ showInfo }
						{ offer }
					</div>
				}
		return(
				show		
			)
	}
}
export default connect(
		state => ({
			day: state.Show
		}),
		dispatch=>({
			onClose: ()=>{
				dispatch({type:"DAY_CLOSE", day: ''})
			}
		})
	)(Show);


	const style = {
		heading: {
			backgroundColor: 'white',
			border: '1px solid white',
			borderBottom: '10px solid #FF5A5F',
			borderTop: '1px solid #FF5A5F',
		},
		holder: {
			border: '0px solid #FF5A5F'
		},
		closeBtn:{
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
			fontSize:'25px',
		}	,
	}