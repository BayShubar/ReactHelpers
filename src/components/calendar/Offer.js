import React from 'react'
import { connect } from 'react-redux'
import { toAdd } from '../../store/action/OrdersAction'

class Offer extends React.Component{
	constructor(props) {
		super(props);
		this.sendOffer = this.sendOffer.bind(this);
	}

	sendOffer(){
		let date = this.props.date.month +" "+ this.props.date.date;
		this.props.onSendOffer({city: this.city.value, date: date,
						money: this.money.value, user: this.props.user })

	}

	render(){
		return(
				<div style={{ padding: '0px 60px 60px 70px' }}>
						<div style={style.textDate}>Offer Deal</div>
					<input style={style.inputBox} type="text" ref={(input)=>{this.city = input}} className="form-control" placeholder="City..." /><br/>
					<input style={style.inputBox} type="text" ref={(input)=>{this.money = input}} className="form-control" placeholder="Money..." /><br/>
					<input type="submit" onClick={ this.sendOffer } className="btn btn-success pull-right" value="Offer" style={style.offerBtn} />
				</div>
			)
	}
}

export default connect(
		state=>({
			user: state.User.login,
			date: state.Show,
		}),
		dispatch=>({
			onSendOffer: (data)=>{
				dispatch(toAdd(data));
				dispatch({type:'DAY_CLOSE'});
			}
		}),
	)(Offer);


	const style = {
		offerBtn:{
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
			fontSize:'20px',
		}	,
		inputBox:{
			border: '1px solid #FF5A5F',
		}
	}