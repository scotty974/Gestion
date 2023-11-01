import { useState } from "react"

export default function InputAddSpent({addSpent}){
const [spent, setSpent] = useState(null)


const handleSpent = (e) => {
    setSpent(e.target.value)
   
}
const sendSpentdata = (event) => {
    event.preventDefault()
    addSpent(spent)
    setSpent(0)
}


    return (
        <form onSubmit={sendSpentdata}>
            <input type="number" name="number" id="number" className="shadow-md p-3 rounded w-96" value={spent} onChange={handleSpent} required/>
        </form>
    )
}