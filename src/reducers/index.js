import { combineReducers } from 'redux';
import company from './company.reducer';
import restaurant from './restaurant.reducer';

export default  combineReducers({
    company,
    restaurant
});
