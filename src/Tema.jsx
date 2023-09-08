import { useState } from "react"

export default function Team (){
    const [team,setTeam]=useState(11)
    const handleAdd=()=>{
        const nweTeam=team+1;
        setTeam(nweTeam);
    }
    const handleRemove=()=>setTeam(team-1);
    const style ={
        border:'2px solid red',
       margin:'12px',
        padding:'3px'
        
    }
    return(
        <div style={style}>
            <h3>Players :{team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>

    )
}