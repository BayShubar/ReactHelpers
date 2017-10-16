import React from 'react'

class Show extends React.Component{

	render(){

		const element = {
			backgroundColor: '#4CAF50',
			padding:'2px 15px',
			margin:'3px',
			color:'white',
			display:'inline-block',
			borderRadius: '15px'
		}

		return(
				<div className="panel panel-success">
					<div className="panel-heading">
						21 March
						<button className="btn btn-danger pull-right btn-xs">X</button>
					</div>	
					<div className = "panel-body">
							<div style={element}><h5><b>City:</b> Almaty</h5></div>
							<div style={element}><h5><b>Restarun:</b> Rolex</h5></div>
							<div style={element}><h5><b>Time:</b> (8:00-2:00)</h5></div>
							<div style={element}><h5><b>Money:</b> 256$ </h5></div>
							<div style={element}><h5><b>Orderer:</b> Yereke199 </h5></div>
					</div>
				</div>
			)
	}
}

export default Show;