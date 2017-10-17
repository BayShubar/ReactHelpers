import { year } from '../YearData.js'

export const toNextMonth = (id)=>dispatch=>{
		setTimeout(()=>{
			let nextId = id+1;
			if(id==12){
				nextId = 1;
			}
			year.map((month)=>{
				if(month.id == nextId)
					dispatch({type:"NEXT-MONTH", month:month})
			});
		},500);
}

export const toPreviousMonth = (id)=>dispatch=>{
		setTimeout(()=>{
			let prevId = id-1;
			if(id==1){
				prevId = 12;
			}
			year.map((month)=>{
				if(month.id == prevId)
					dispatch({type:"NEXT-MONTH", month:month})
			});
		},500);
}

export const toCurrentMonth = ()=>dispatch=>{
	setTimeout(()=>{
		const currentMonth = 2;
			year.map((month)=>{
				if(month.id == currentMonth)
					dispatch({type:"CURRENT-MONTH", month:month})
			});
	},500);
}

export const toShow = (day) =>dispatch=>{
	setTimeout(()=>{
		dispatch({type:"DAY_SHOW", day: day});
	},1000);
}