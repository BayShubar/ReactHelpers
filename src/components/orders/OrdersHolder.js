import React from 'react'
import { connect } from 'react-redux'
import { toInitialLoad } from '../../store/action/OrdersAction'

import OrderHeading from './OrderHeading'
import Order from './Order'

class OrdersHolder extends React.Component{

	componentDidMount() {
		this.props.onInitialLoad();
	}

	render(){
		const orders = [];

		this.props.orders.map((order, index)=>{
				orders.push(<Order key={ index.toString() } order={ order } />);
		});

		return(
				<div style={style.holder}>
					<OrderHeading/>
					<div style={style.body} id="orderList">
						<div>
							{ orders }
						</div>
					</div>
				</div>
			)
	}
}

export default connect(
		state=>({
			orders: state.Orders
		}),
		dispatch=>({
			onInitialLoad: ()=>{
				dispatch(toInitialLoad());
			}
		})
	)(OrdersHolder);

const style = {
	holder: {
		width: '400px',
		margin: 'auto',
		boxShadow: '0px 0px 55px -9px rgba(0,0,0,0.75)',
	},
	body:{
			height: '450px',
			overflowY: 'scroll',
			marginBottom: '25px',
	}
}