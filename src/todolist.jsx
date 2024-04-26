import React, { useState } from "react"


function Todolist() {

const[tasks , setTasks] = useState([])
const [newTask , setNewTask ]  = useState("")

function HandleInputChange(event) {
    setNewTask(event.target.value)

}

function addTask() {
    if(newTask.trim() !== "") {
    setTasks(t =>[...t, newTask])
    setNewTask("")
    }
}

function removeTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
    
}

function moveTaskup(index){

    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = 
        [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

function moveTaskdown(index) {
    if(index < tasks.length - 1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = 
        [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    
}
}
    return(  <div className="to-do-list">
        <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                placeholder="Enter A Task..."
                 value={newTask}
                 onChange={HandleInputChange} />
                 <button className="addButton" onClick={addTask}>
                    Add Task
                 </button>
            </div>
           <ol>
            {tasks.map((task,index) =>
            <li key={index}>
                <span className="text">{task}</span>
                <button className="deleteButton" 
                onClick={() =>  removeTask(index)}>
                    Delete
                </button>
                <button className="moveButton" 
                onClick={() => moveTaskup(index)}>
                    ☝️
                </button>
                <button className="moveButton" 
                onClick={() => moveTaskdown(index)}>
                   👇  
                </button>
            </li>
               
               )} 
        
           </ol>
        
             </div>)

            }

export default Todolist