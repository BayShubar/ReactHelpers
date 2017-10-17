import React from 'react' 

export default class ShowInfo extends React.Component{

	render(){
		const day = this.props.day;
		return(
				<div className = "panel-body">
						<div style={style.element}><h5><b>City:</b>{ day.city }</h5></div>
						<div style={style.element}><h5><b>Restarun:</b> Rolex</h5></div>
						<div style={style.element}><h5><b>Time:</b> (8:00-2:00)</h5></div>
						<div style={style.element}><h5><b>Money:</b> 256$ </h5></div>
						<div style={style.element}><h5><b>Orderer:</b> Yereke199 </h5></div>
				</div>
			)
	}
}

	const style = {
		element : {
			padding:'2px 15px',
			margin:'3px',
			color: '#FF5A5F',
			display:'inline-block',
			borderRadius: '15px',
			border: '1px solid #FF5A5F',
		}	
	}