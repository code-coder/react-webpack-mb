import { createActions } from 'redux-actions';

const actionTypes = {
  SET_GLOBAL_DATA: 'SET_GLOBAL_DATA',
  CHANGE_QUIT_STATE: 'CHANGE_QUIT_STATE'
};

const { setGlobalData } = createActions({
  [actionTypes.SET_GLOBAL_DATA]: payload => payload
});

export { actionTypes, setGlobalData };
