const initialState = {
	id:0,
	month: 'default',
	days: [
		
	]
}

export default function Calenda(state = initialState, action){
	if(action.type == "CURRENT-MONTH"){
			return action.month
	}else if(action.type === "NEXT-MONTH"){
			return action.month
	}else if(action.type === "PREVIOUS-MONTH"){
	}
	return state;
}