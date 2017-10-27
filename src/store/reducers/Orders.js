const initialState = [
	
]

export default function Orders(state = initialState, action){
	switch(action.type){
		case 'ORDER_ADD':
				return state.concat(action.order);

		case 'ORDER_DELETE':
				state.map((order, index)=>{
				if(order.id === action.order)
					state.splice(index, 1);
				});
				return [
					...state
				];
		case 'ORDER_ACCEPT':
				state.map((order, index)=>{
					if(order.id === action.order)
						state.splice(index, 1);
				});
				return [
					...state
				];
		case 'ORDER_ADD_OFFER':
			let order = {
				id: state.length+1,
				user: action.order.user,
				city: action.order.city,
				money: action.order.money,
				date: action.order.date,
			}
				return [
					...state, order
				];


		default: 
			return state;
	}
}