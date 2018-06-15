import { EMPLOYEE_UPDATE,
   EMPLOYEE_SAVE,
   EMPLOYEE_SAVE_SUCESS,
   EMPLOYEES_FETCH_SUCESS  } from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload { prop: 'name', value: 'Jane' } ES6 magic
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_SAVE:
      return { ...state };
    case EMPLOYEE_SAVE_SUCESS:
      return { INITIAL_STATE };
    default:
      return state;
  }
}
