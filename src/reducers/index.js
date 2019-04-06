import { combineReducers } from 'redux';
import company from './company.reducer';
import restaurant from './restaurant.reducer';
import authentication from './authentication.reducer';

export default  combineReducers({
    company,
    restaurant,
    authentication
});
