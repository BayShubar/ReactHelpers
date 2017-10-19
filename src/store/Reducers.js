import { combineReducers } from 'redux'

import Calendar from './reducers/Calendar'
import Show from './reducers/Show'
import Orders from './reducers/Orders'

export default combineReducers({
		Calendar,
		Show,
		Orders,
});