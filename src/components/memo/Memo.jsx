import React, { useState } from 'react'
import { Todos } from './Todos'

export const Memo = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(['todo 1','todo 2'])

    const increment =()=>{
        setCount((c)=>c+1)
    }
    return (
        <>
        <Todos todos={todos}/>
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
        </div>
        </>
    )
}
