import { useState } from "react"


export default function Counter(){
   const [count,setCount]=useState(0)
     const handleAdd=()=>{
        let newCount=count+1;
        setCount(newCount);
     }
     const handlereduse=()=>{
        let newCount=count-1;
        setCount(newCount);
     }
    return(
        <div style={{border:'2px solid yellow'}}>
            <h3>count : {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handlereduse}>Reduse</button>
        </div>
    )
}

