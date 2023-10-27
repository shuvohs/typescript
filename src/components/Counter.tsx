import React, { useReducer } from 'react'

const initialState = {
  count: 0
}

const INCREMENT = "INCREMENT"
const RESET = "RESET"
const DECREMENT = "DECREMENT"

type INCREMENTActionType = { type: typeof INCREMENT}
type RESETActionType = {type : typeof RESET}
type DECREMENTActionType = {type : typeof DECREMENT}

type CounterActionType = INCREMENTActionType | RESETActionType | DECREMENTActionType ;

const reducer = (state: typeof initialState, action : CounterActionType ) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    case RESET:
      return { count: 0 }
    default:
      throw new Error()
  }

}


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type : INCREMENT})}>increment</button>
      <button onClick={() => dispatch({ type : RESET})}>reset</button>
      <button onClick={() => dispatch({ type : DECREMENT})}>decrement</button>
    </div>
  )
}

export default Counter
