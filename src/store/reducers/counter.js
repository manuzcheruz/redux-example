import * as actionTypes from '../actions';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                // copying the old state so as to avoid modifying it
                ...state,
                // or use the normal javascript to create a copy of an object var x = Object.assign({}, state);
                counter: state.counter + 1
            }
            case actionTypes.DECREMENT:
                return {
                    ...state,
                    counter: state.counter - 1
                }
            case actionTypes.ADD:
                return {
                    ...state,
                    counter: state.counter + action.value
                }
            case actionTypes.SUBTRACT:
                return {
                   ...state,
                    counter: state.counter - action.value
                }
    }
    return state;
}

export default reducer;