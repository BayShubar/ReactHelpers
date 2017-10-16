const initialState = {
	id:1,
	month: 'Januar',
	days: [
		{date: '1', city: "Taraz", empty: true},
		{date: '2', city: "Almaty", empty: false},
		{date: '3', city: "Semey", empty: true},
		{date: '4', city: "Aktau", empty: false},
		{date: '5', city: "Semey", empty: true},
		{date: '6', city: "Almaty", empty: false},
		{date: '7', city: "Astana", empty: false},
		{date: '8', city: "Aktau", empty: false},
		{date: '9', city: "Atyrau", empty: true},
		{date: '10', city: "Almaty", empty: false},
		{date: '11', city: "Astana", empty: false},
		{date: '12', city: "Aktau", empty: false},
		{date: '13', city: "Taraz", empty: false},
		{date: '14', city: "Almaty", empty: false},
		{date: '15', city: "Astana", empty: false},
		{date: '16', city: "Aktau", empty: true},
		{date: '17', city: "Aktobe", empty: false},
		{date: '18', city: "Almaty", empty: true},
		{date: '19', city: "Shimkent", empty: true},
		{date: '20', city: "Aktau", empty: false},
		{date: '21', city: "Taraz", empty: true},
		{date: '22', city: "Almaty", empty: false},
		{date: '23', city: "", empty: true},
		{date: '24', city: "Aktau", empty: false},
		{date: '25', city: "Taraz", empty: false},
		{date: '26', city: "Almaty", empty: true},
		{date: '27', city: "Astana", empty: false},
		{date: '28', city: "Aktau", empty: false},
		{date: '29', city: "Taraz", empty: false},
	]
}

export default function Calenda(state = initialState, action){
	if(action.type === "NEXT-MONTH"){

	}else if(action.type === "PREVIOUS-MONTH"){

	}
	return state;
}