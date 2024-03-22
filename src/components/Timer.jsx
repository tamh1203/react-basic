import React from 'react'
import { useEffect, useState } from 'react'

export default function Timer() {
  const [count, setCount] = useState(new Date().toLocaleTimeString());
  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(new Date().toLocaleTimeString())
    },1000)
    return () => clearInterval(interval);
  },[])
  return (
    <div
    style={{
        display: "flexbox",
        margin: "auto",
        textAlign: "center",
    }}
>
    <h1 style={{ color: "green" }}>
        Learn ReactJS Beginner
    </h1>
    <h3>
        React Example for using setInterval method
    </h3>
    <h1>{count}</h1>
</div>
  )
}
