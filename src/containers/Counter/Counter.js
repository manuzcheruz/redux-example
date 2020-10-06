import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.incrementDispatcher} />
                <CounterControl label="Decrement" clicked={this.props.decrementDispatcher}  />
                <CounterControl label="Add 20" clicked={this.props.addDispatcher}  />
                <CounterControl label="Subtract 10" clicked={this.props.subtractDispatcher}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResult.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteStoredResult(result.id)}>{result.value}</li>))}
                </ul>
            </div>
        );
    }
}

// accessing our state stored in redux and using it in our component
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    };
};

// dispatching actions from within the component to our redux reducer
const dispatchToReducer = dispatch => {
    return {
        incrementDispatcher: () => dispatch({type: actionTypes.INCREMENT}),
        decrementDispatcher: () => dispatch({type: actionTypes.DECREMENT}),
        addDispatcher: () => dispatch({type: actionTypes.ADD, value: 20}),
        subtractDispatcher: () => dispatch({type: actionTypes.SUBTRACT, value: 10}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteStoredResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    };
};

export default connect(mapStateToProps, dispatchToReducer)(Counter);