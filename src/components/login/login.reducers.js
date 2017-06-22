import * as actions from './login.actions.js';

export function loginReducer(state = {}, action){
  switch(action.type){
    // case 'NAME_CHANGE':
    //   return Object.assign({}, state, {
    //     listName: action.listName
    //   })

    default:
      return state
  }
}

export default loginReducer;
