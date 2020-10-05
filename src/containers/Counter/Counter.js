import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
            </div>
        );
    }
}

// accessing our state stored in redux and using it in our component
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

// dispatching actions from within the component to our redux reducer
const dispatchToReducer = dispatch => {
    return {
        incrementDispatcher: () => dispatch({type: 'INCREMENT'}),
        decrementDispatcher: () => dispatch({type: 'DECREMENT'}),
        addDispatcher: () => dispatch({type: 'ADD', value: 20}),
        subtractDispatcher: () => dispatch({type: 'SUBTRACT', value: 10})
    };
};

export default connect(mapStateToProps, dispatchToReducer)(Counter);