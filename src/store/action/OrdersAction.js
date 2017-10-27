import { orders } from '../data/orders'

export const toInitialLoad = ()=>dispatch=>{
	setTimeout(()=>{
		dispatch({ type:"ORDER_ADD", order: orders });
	}, 100)
}

export const toCancile = (id)=>dispatch=>{
	setTimeout(()=>{
		dispatch({type:"ORDER_DELETE", order: id })
	},100);
}

export const toAccept = (id)=>dispatch=>{
	setTimeout(()=>{
		dispatch({ type: "ORDER_ACCEPT", order: id })
	}, 100);
}

export const toAdd = (data)=>dispatch=>{
	setTimeout(()=>{
		dispatch({type: "ORDER_ADD_OFFER", order:data})
	}, 100);
}