import React, { Component } from 'react';

import CalendarHolder from './components/calendar/CalendarHolder'

class App extends Component {
  render() {
    return (
      <div className="App">
				<hr/>
        <CalendarHolder />
      </div>
    );
  }
}

export default App;
