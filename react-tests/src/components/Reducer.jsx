import { useState, useReducer } from 'react';


export default function Reducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, userInput: '', color: false})

  function reducer(state, action) {
    switch(action.type) {
      case 'increment':
        return ({...state,  count: state.count + 1});
        case 'decrement':
        return ({...state,  count: state.count - 1});
        case 'reset':
          return ({...state, count: state.counnt = 0});
          case 'newUserInput':
            return ({...state, userInput: action.payload});
            case 'tgColor':
              return {...state, color: !state.color};
        default: return state;
    }
  }


  return (
    <div style={{ color: state.color ? 'blue' : 'green'}}>
      <input type="text" value={state.userInput} onChange={(e) => dispatch({type: 'newUserInput', payload: e.target.value})} />
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({ type: 'reset'})}>Reset</button>
      <button onClick={() => dispatch({ type: 'tgColor'})}>Color</button>
      <p>{state.userInput}</p>
    </div>
  )
}











// import { useState, useReducer} from 'react';
// import Todo from './Todo';

// export const ACTIONS = {
//   ADD_TODO: 'add-todo'
// }

// function reducer(todos, action){
//   switch(action.type) {
//     case ACTIONS.ADD_TODO:
//       return [...todos, newTodo(action.payload.name)]
//       case ACTIONS.TOGGLE_TODO:
//         return todos.map(todo => {
//           if(todo.id === action.payload.id) {
//             return {...todo, complete: !todo.complete}
//           }
//           return todo
//         })
//   }
// }

// function newTodo(name) {
//   return { id: Date.now(), name: name, complete: false}
// }

// export default function Reducer() {
//   const[todos, dispatch] = useReducer(reducer, []);
//   const [name, setName] = useState('')



//   function handleSubmit(e) {
//     e.preventDefault()
//     dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name }})
//     setName('');
//   }


//   console.log(todos)


//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </form>
//       {todos.map(todo => {
//         return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
//       })}
//     </div>
//   )
// }










// import { useReducer } from 'react';

// const ACTIONS = {
//   INCREMENT: 'increment',
//   DECREMENT: 'decrement'
// }

// export default function Reducer() {

//   function reducer(state, action) {
//     switch(action.type){
//       case ACTIONS.INCREMENT:
//         return { count: state.count + 1}
//         case ACTIONS.DECREMENT:
//           return { count: state.count -1}
//           default: return state;
//     }
//   }

//   function increment() {
//     dispatch ( {type: ACTIONS.INCREMENT })
//   }

//   function decrement() {
//     dispatch({type: ACTIONS.DECREMENT})
//   }

//   const [state, dispatch] = useReducer(reducer, { count: 0})
//   return (
//     <div className={ state.count > 0 ? 'positive' : 'negative'}>
//       <button onClick={increment}>+</button>
//       <span>{state.count}</span>
//       <button onClick={decrement}>-</button>
//     </div>
//   )
// }
