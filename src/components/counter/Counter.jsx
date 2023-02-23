import React,{useState} from 'react'
import './counter.css'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement,reset,incrementByValue,decrementByValue } from './counterSlice.js'

const Counter = () => {

    const dispatch = useDispatch()
    const counte = useSelector((state)=>state.counter.value)

    const [incrementByAmount,setIncrementByAmount]=useState(0)
    const [decrementByAmount,setDecrementByAmount]=useState(0)

    const losValue =Number(decrementByAmount) || 0

    const addValue = Number(incrementByAmount) || 0

    const resetAll=()=>{
      setIncrementByAmount(0)
      dispatch(reset())
      setDecrementByAmount(0)
    }
    
  return (
    <section >
        <p>{counte}</p>
        <div>
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(decrement())}>-</button>
          <button onClick={resetAll}>reset</button>
        </div>
        <input
        type="text"
        value={incrementByAmount}
        placeholder='incrementByAmount'
        onChange={(e)=>setIncrementByAmount(e.target.value)}
        />
        <input
        type="text"
        value={decrementByAmount}
        placeholder='decrementByAmount'
        onChange={(e)=>setDecrementByAmount(e.target.value)}
        />
        <div>
          <button onClick={()=>dispatch(incrementByValue(addValue))} >Add Amount</button>
          <button onClick={()=>dispatch(decrementByValue(losValue))} >Remove Amount</button>
        </div>
    </section>
  )
}

export default Counter
