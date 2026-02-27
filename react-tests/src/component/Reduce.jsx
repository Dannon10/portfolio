import React, { useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  TG_COLOR: 'tg_color'
}
const reducer = (state, action) => {
  switch( action.type) {
    case 'increment': 
    return { ...state, count: state.count + 1}
    case 'decrement':
    return { ...state, count: state.count - 1}
    case 'reset':
    return { ...state, count: 0}
    case ACTIONS.TG_COLOR: 
    return {...state, color: !state.color}
    case 'new_query':
      return {...state, query: action.payload}
      default: throw new Error();
  }
}

export default function Reduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0, color: false, userInput: ''})
  const { count, color, userInput} = state
  return (
    <div>
      <input
      type="text"
      value={userInput}
      onChange={(e) => dispatch({ type: 'new_query', payload: e.target.value})}
      />
      <p style={{ color: color ? 'red' : 'blue'}}>{count}</p>
      <button onClick={(e) => dispatch({type: ACTIONS.INCREMENT})}>+</button>
      <button onClick={(e) => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      <button onClick={(e) => dispatch({ type: ACTIONS.RESET})}>Reset</button>
      <button onClick={(e) => dispatch({ type: ACTIONS.TG_COLOR})}>Color</button>
    </div>
  )
}