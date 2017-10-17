import { combineReducers } from 'redux'

import Calendar from './reducers/Calendar'
import Show from './reducers/Show'

export default combineReducers({
		Calendar,
		Show
});