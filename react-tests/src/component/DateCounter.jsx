import { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }
        case 'decrement':
            return { ...state, count: state.count - 1 }
        case 'reset':
            return { ...state, count: 0,userInput: '' }
        case 'newUserInput':
            return { ...state, userInput: action.payload}
        case 'tgColor':
            return { ...state, color: !state.color }
        default: throw new Error();
    }
}

const ACTION = {
    INCREMET: 'increment',
    DECREMENT: 'decrement',
    RESET: 'reset',
    NEW_USER_INPUT: 'newUserInput',
    TG_COLOR: 'tgColor' 
}


export default function DateCounter() {
    const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false })
    // const [count, dispatch] = useReducer(reducer, 0)
    // const [step, setStep] = useState(1);

    // const date = new Date('June 21, 2023');
    // date.setDate(date.getDate() + count);

    // const dec = () => {
    //     dispatch({type: 'dec', payload: -1})
    //     setCount((prev) => prev - step);
    // }

    // const inc = () => {
    //     dispatch({type: 'inc', payload: 1})
    //     setCount((prev) => prev + step)
    // }

    // const defineCount = (e) => {
    //     dispatch(Number(e.target.value));
    // }

    // const defineStep = (e) => {
    //     setStep(Number(e.target.value));
    // }

    // const reset = () => {
    //     setCount(0);
    //     setStep(1);
    // }


    return (
        <div className='state' style={{ color: state.color ? 'red' : 'green'}}
        > 
            <input type="text"
            value={state.userInput}
            onChange={(e) => dispatch({type: 'newUserInput', payload: e.target.value})}
            />
            <p>
                {state.userInput}
            </p>
            <p>
                {state.count}
            </p>
            <button  onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button  onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            <button onClick={() => dispatch({type: 'tgColor'})}>Color</button>
        </div>
    )
}
