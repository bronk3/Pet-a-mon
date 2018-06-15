import { EMPLOYEE_UPDATE,
   EMPLOYEE_SAVE_SUCESS,
   EMPLOYEES_FETCH_SUCESS } from './types';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export const employeeUpdate = ({ prop, value }) => {
  return({
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  });
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .remove()
    .then( () => {
      Actions.pop()
    })
    .catch(() => console.log("Error deleting employee"));
  }
}

export const employeeEdit = ({ name, phone, shift , uid}) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
    .set( { name, phone, shift } )
    .then( () => {
      dispatch({type: EMPLOYEE_SAVE_SUCESS });
      Actions.pop()
    } )
    .catch(() => console.log("Error editing employee"));
  }
}

export const employeeSave = ({ name, phone, shift = "Monday" }) => {
  // dispatch will let us manually call render
  const userModel = { name, phone, shift };
  const { currentUser } = firebase.auth();
    return (dispatch) => {
      //firebase
      //json data structure -> /users/userId/employees
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push(userModel)
        .then(() => {
          dispatch({ type: EMPLOYEE_SAVE_SUCESS });
          Actions.pop();
        });
        // returns to the previous scene
    }
  };

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    //returns an object of snapshot
    // this function will automatically reload when data changes
    .on('value', snapshot => {
      dispatch({ type: EMPLOYEES_FETCH_SUCESS, payload: snapshot.val() });
    });
  }
}
