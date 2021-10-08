import React,{ useState } from "react";
import './list.css';
function List() {
    const [input,setInput] = useState("");
    const [item,setItem] = useState([]);
    function handleChange(event) {
        setInput(event.target.value);
      }
     
      function handleAdd(event) {
       setItem([...item,{todo:input, key:Date.now()}]);
       setInput("");
      }
      const deleteItem = key => {
        const updateList= item.filter(task => {
          return task.key !== key;
        })
        setItem(updateList);
      }

      
    return (
        <div className="wrapper">
          
    <input className="textinput" placeholder="Add task" value={input} onChange={handleChange}/>
      <button className="todo-button" onClick={handleAdd}>Add</button>
      {item.map((task) =>{
           return  <p className="tasklist" contentEditable="true">{task.todo} 
          <button className="delete"onClick={() => deleteItem(task.key)}>x</button>
           
           </p>
      })}
    
        </div>
    ) 

}
  export default List;