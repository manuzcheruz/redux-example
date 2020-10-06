import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            // two ways to do this, 1, by using the spice method to remove the reult using the id immutably(by first spreading into a new array)
            // const id = 2
            // const updated = [...state.results]
            // updated.splice(id, 1)
            // o you can do this below using filter which returns a new array by default
            const updatedArray = state.results.filter(result => result.id !== action.resultElId)
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;