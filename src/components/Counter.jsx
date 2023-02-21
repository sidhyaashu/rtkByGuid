import React from 'react'
import '../App.css'
import { useDispatch,useSelector } from 'react-redux'
import { increment,incrementByValue,decrement,decrementByValue } from '../state/counter/counterSlice.js'

const Counter = () => {

    const dispatch = useDispatch()
    const counte = useSelector((state)=>state.counter.value)
    
  return (
    <div className='container' >
      <div className="box">
        <p>{counte}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>incrementByValue(decrement(10))}>+</button>
        <button onClick={()=>decrementByValue(decrement(20))}>-</button>
      </div>
    </div>
  )
}

export default Counter
