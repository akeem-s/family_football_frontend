//redux dependencies
import {combineReducers} from 'redux';

//reducers
import loginReducer from '../components/login/login.reducers.js';

let reducers = combineReducers({
  loginReducer
});

export default reducers
