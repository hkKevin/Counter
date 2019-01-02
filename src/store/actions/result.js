import * as actionTypes from './actionTypes';

// actionCreators for result:
export const saveResult = (res) => {
  //const updatedResult = res * 2;
  return {
    type: actionTypes.STORE_RESULT,
    result: res
  };
}
export const storeResult = (res) => {
  return dispatch => {
    setTimeout(() => {
        dispatch(saveResult(res));
    }, 1000);
  }
};


export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElementId: resElId
  };
};