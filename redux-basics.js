const redux = require('redux');
const createStore = redux.createStore;

// initialize a state first
const initialState = {
    counter: 0
}

// reducer first to modify the state and takes in two arguments
// es6 feature provide a default to state when none in passed
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};

// create new store and pass in the reducer
const store = createStore(rootReducer);
// getState is used to access the state/store
console.log(store.getState());


// subscription
store.subscribe(() => {
    console.log('[sub]', store.getState());
});

// dispatching action....type and payload and more
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10})
console.log(store.getState());
