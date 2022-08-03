import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function

export const UseMemo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])
    const calculation  = useMemo(() => expensiveCalculation(count), [count]) 

    const increment =()=>{
        setCount((c)=>c+1)
    }
    const addTodo =()=>{
        setTodos((t)=>[...t,'New Todo with useMemo'])
    }
    
  return (
    <div>
        <div>
            <h2>My Todos</h2>
            {todos.map((todo,index)=>{
                return  <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive calculation</h2> {calculation}
        </div>
    </div>
  )
}

const expensiveCalculation =(num)=>{
    console.log('Calculating...');
    for (let i = 0; i < 1000000; i++) {
        num += 1
    }
    return num
}
