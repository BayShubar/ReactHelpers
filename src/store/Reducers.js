import { combineReducers } from 'redux'

import Calendar from './reducers/Calendar'
import Show from './reducers/Show'
import Orders from './reducers/Orders'
import User from './reducers/User'

export default combineReducers({
		Calendar,
		Show,
		Orders,
		User,
});