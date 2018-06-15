import { EMAIL_CHANGE,
          PASSWORD_CHANGE,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL,
          LOGIN_USER } from '../actions/types';
// cant return a state of undefined so need to define it
const INITIAL_STATE = {
  email: '',
  password: '',
  user: {},
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    //use a constant so the reducer and action are always using the same string
    case EMAIL_CHANGE:
      //return a new object to make it obvious we changed a value
      return { ...state, email: action.payload };
    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };
    case LOGIN_USER:
      return { ...state, loading: action.payload, error: '' };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication issues', password: '', loading: false };
    default:
      // cant return an undefined state
      return state;
  }
}
