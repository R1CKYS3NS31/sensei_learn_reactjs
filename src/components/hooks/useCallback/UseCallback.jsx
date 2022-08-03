import React from 'react'
// This allows us to isolate resource intensive functions so that they will not automatically run on every render.
// The useCallback Hook only runs when one of its dependencies update.

export const UseCallback = () => {
    
  return (
    <div>UseCallback</div>
  )
}
