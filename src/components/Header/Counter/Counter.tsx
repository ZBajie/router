import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../../../state/counter/counterSlice"
import { AppDispatch, RootState } from "../../../state/store"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <section className="counter">
      <h2>Counter</h2>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
        <button onClick={() => dispatch(decrementByAmount(10))}>
          Decrement by 10
        </button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementAsync(10))}>
          Increment Async
        </button>
      </div>
    </section>
  )
}

export default Counter
