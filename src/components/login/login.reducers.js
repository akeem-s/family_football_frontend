import * as actions from './login.actions.js';

export function loginReducer(state = {}, action){
  switch(action.type){
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        data: action.data
      })

    default:
      return state
  }
}

export default loginReducer;
