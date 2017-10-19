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

		default: 
			return state;
	}
}