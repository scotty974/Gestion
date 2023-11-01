import { useEffect, useState } from "react";
import "./App.css";
import InputAddSpent from "./components/InputAddSpent";
function App() {
  const [spentTab, setSpentTab] = useState([]);
  const [total, setTotal] = useState(0)

  const handleSpentTab = (item) => {
    const parsedItem = parseFloat(item) 
    setSpentTab([...spentTab, parsedItem]);
  
  };

useEffect(()=>{
  const newTotal = spentTab.reduce((acc, currentValue)=>acc + currentValue, 0)
  setTotal(newTotal)
},[spentTab])


const handleDelete = (item) => {
  // on crée un nouvea tableau avec l'élement qu'on veux pas
  const newTable = spentTab.filter((value) => value !== item);
    setSpentTab(newTable);
}

  const lists = spentTab.map((money,index) => <li className="shadow-md w-96 p-5 flex items-center justify-between rounded" key={index}>{money} € <button className="pi pi-times hover:bg-red-500 hover:text-white rounded-full p-3" onClick={()=>handleDelete(money)}></button></li>);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center justify-between my-5">
        <InputAddSpent addSpent={handleSpentTab} />
        <ul className="my-10">{lists}</ul>
        {spentTab.length > 0 && <p>Total : {total} €</p>}
      </div>
         
    </section>
  );
}

export default App;
