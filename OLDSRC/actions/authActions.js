import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGE,
          PASSWORD_CHANGE,
          LOGIN_USER_SUCCESS,
          LOGIN_USER_FAIL,
          LOGIN_USER } from './types';
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGE,
    payload: text
  }
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGE,
    payload: text
  }
};

export const loginUser = ({email, password}) => {
  // dispatch will let us manually call render
  // when you return a function instead of an object redux-ReduxThunk
  // kicks in and deals with async
  return (dispatch) => {
    dispatch({type: LOGIN_USER, payload: true});
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( user => loginUserSuccess(dispatch, user))
        .catch( () => loginUserFail(dispatch));
    });
  }
}

const loginUserSuccess = ( dispatch, user ) => {
  // dispatch is called on all actions -> only difference inspect
  // we are manually calling dispatch in async
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user});
  //router main scene
  Actions.main();
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: '' });
}
