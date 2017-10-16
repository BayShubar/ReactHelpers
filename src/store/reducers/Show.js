initialState: {
	show: false,
	data:{}
}

export default function(state = initialState, action){
	if(action.type === 'DAY_SHOW'){
		console.log("Suka")
	}
	return state;
}