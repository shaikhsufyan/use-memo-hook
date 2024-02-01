import React, { useMemo, useState } from 'react'

const Memo = () => {
    const [state, setState] = useState(0);
    const [sub, setSub] = useState(100);

    const multi = () =>{
        console.log("running");
        return state*2;
    }
     const multiply = useMemo(()=>{
        return multi()
     },[state])
  return (
    <>
      <p>Multi : {multiply}</p>
      <h1>{state}</h1>
      <h1>{sub}</h1>

        <button onClick={()=>{setState(state+1)}}>Add</button>
        <button onClick={()=>{setSub(sub-1)}}>Subtract</button>

    </>
  )
}

export default Memo
