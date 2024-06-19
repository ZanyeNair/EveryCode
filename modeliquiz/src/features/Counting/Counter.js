import react, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement
} from './counterSlice';


function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return(
        <div>
            <button aria-label = "Increment value" onClick={() => dispatch(increment())}>
                    +
            </button>
            <span>
                {count}
            </span>
            <button aria-label = "Decrememt value" onClick={() => dispatch(decrement())}>
                    -
            </button>
        </div>
    );
}

export default Counter;