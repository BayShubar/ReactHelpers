import { orders } from '../data/orders'

export const toInitialLoad = ()=>dispatch=>{
	setTimeout(()=>{
		dispatch({ type:"ORDER_ADD", order: orders });
	}, 500)
}

export const toAccept = (id)=>dispatch=>{
	setTimeout(()=>{
		dispatch({type:"ORDER_DELETE", order: id })
	},100);
}