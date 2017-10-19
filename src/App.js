import React, { Component } from 'react';

import CalendarHolder from './components/calendar/CalendarHolder'
import OrdersHolder from './components/orders/OrdersHolder'

class App extends Component {
  render() {
    return (
      <div className="App">
				<hr/>
				<OrdersHolder />
				<hr/>	
        <CalendarHolder />
        <hr />
      </div>
    );
  }
}

export default App;
