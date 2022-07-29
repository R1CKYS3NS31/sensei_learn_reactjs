import React from 'react'
import { useState } from 'react'

export const TextArea = () => {
    const [textarea, setTextarea] = useState(
        'The content of a textarea goes in the veent attribute'
    )

    const handleChange=(event)=>{
        setTextarea(event.target.value)
    }
  return (
    <form>
        <textarea name="ta" id="ta" cols="30" rows="10" onChange={handleChange}/>
    </form>
  )
}
