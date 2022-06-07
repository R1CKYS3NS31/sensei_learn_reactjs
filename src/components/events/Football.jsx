import React from 'react'

export const Football = () => {
    const score = (g)=>{
        alert(g)
    }
    const shoot = ()=>{
        alert("Great shot!")
    }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={shoot}>Take a shot!</button>
        <button onClick={()=>score('Goal!')}>Score!</button>
    </div>
  )
}
