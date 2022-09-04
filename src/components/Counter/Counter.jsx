import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { decrementCounterAction, incrementCounterAction, resetCounterAction } from '../../Redux/actions/counterAction';
import counterReducer from '../../Redux/reducers/counterReducers';

const Counter = () => {

    const count = useSelector((store) => (store.counter));
    const dispatch = useDispatch(counterReducer);

    const incrementHandlerBtn = () => {
        dispatch(incrementCounterAction());
    }
    const decrementHandlerBtn = () => {
        dispatch(decrementCounterAction());
    }
    const resetHandlerBtn = () => {
        dispatch(resetCounterAction());
    }
    return (
        <div>
            <h1 className='text-uppercase pb-3'>Redux Counter APP</h1>
            <h3>Count Number: <span className='text-dark btn btn-warning'>{count}</span></h3>
            <button className='btn btn-success m-1' onClick={decrementHandlerBtn} disabled={count === 0}>-</button>
            <button className='btn btn-success m-1' onClick={incrementHandlerBtn}>+</button>
            <button className='btn btn-success m-1' onClick={resetHandlerBtn} disabled={count === 0}>Reset</button>

        </div>
    );
};

export default Counter;