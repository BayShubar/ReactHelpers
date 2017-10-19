import React from 'react'
import { connect } from 'react-redux'
import {toAccept} from '../../store/action/OrdersAction.js'

class Order extends React.Component{

	render(){
		const order = this.props.order;
		return(
				<div style={style.order}>
					<div style={ style.infoHolder }>
						<p style={ style.textInfo }><b>{ order.user }</b>  ({ order.money })</p><br/>
						<h6 style={style.textDate}>{ order.date }</h6>
					</div>
							<div style={style.headingBtn}>
									<button style={ style.decisionBtn }>
										Accept <span className="glyphicon glyphicon-ok"></span>
									</button>

									<button style={ style.decisionBtn } onClick={()=>{this.props.onClickAccept(order.id)}} >
										Cancil <span className="glyphicon glyphicon-remove"></span>
									</button>

							</div>
				</div>
			)
	}
}

export default connect(
		state =>({}),
		dispatch =>({
			onClickAccept: (id)=>{
				dispatch(toAccept(id));
			}
		})
	)(Order);



const style = {
	order:{
		minHeight: '20px',
		margin: '10px 10px',
		border: '1px solid #FF5A5F',
		borderRadius: '5px',
		padding: '10px 10px',
		color: '#FF5A5F',
	},
	textInfo:{
		display:'inline-block',
		marginTop: '3px',
		marginBottom: '0px',
	},
	textDate:{
		display:'inline-block',
		marginTop: '3px',
		marginBottom: '0px',
	},
		decisionBtn: {
			backgroundColor: 'white',
			border: '1px solid #FF5A5F',
			backgroundColor: '#FF5A5F',
			borderRadius: '5px',
			padding: '6px 20px',
			//color: '#FF5A5F',
			color: 'white',
			marginRight:'4px',
		},
		headingBtn: {
			display: "inline-block",
			float:'right',
			marginTop: '5px'
		},
		infoHolder: {
			display: 'inline-block',
			width: '140px',
		}
}