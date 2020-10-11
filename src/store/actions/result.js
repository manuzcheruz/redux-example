import * as actionCreators from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionCreators.STORE_RESULT,
        result: result
    }
}

// running async tasks here with the help of thunk
export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const deleteResult = (id) => {
    return {
        type: actionCreators.DELETE_RESULT,
        resultElId: id
    }
}