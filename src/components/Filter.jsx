//import { useState } from "react"

export default function Filter({filtered, setFiltered}) {

    const handleChange = ({target}) => {
        filtered = target.value;
        setFiltered(target.value)
    }


    return (
    <div style={{display : "flex", alignItems : "center", gap : "1em"}}>
        <p style={{fontSize : "18px"}}>Filter by: </p>
        <select onChange={handleChange} value={filtered} name="doneFilter">
            <option value="all" onSelect={() => {}} >All</option>
            <option value="done" onSelect={() => {}} >Done</option>
            <option value="pending" onSelect={() => {}}>Pending</option>
        </select>

    

    </div>
  )
}