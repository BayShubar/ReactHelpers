const initialState = {
	show: false,
	empty: false,
	month: '',
	date: '',
	city:'',
}

export default function(state = initialState, action){
		if(action.type === 'DAY_SHOW'){
			return {
								show: true,
								empty: action.day.day.empty,
								month: action.day.month.name,
								date: action.day.day.date,
								city:action.day.day.city,
									
							}
		}else if(action.type === "DAY_CLOSE"){
			return initialState
		}
	return state;
}