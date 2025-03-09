import React, { useState } from 'react';

const Updater = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleTaskChange = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        setTasks(prevTask => [...prevTask, newTask]); 
        setNewTask("");  
    }

    const deleteTask = (i) => {
        setTasks(prevTask => prevTask.filter((_, index) => index !== i))
    }
    
    return(
        <>
        <h2>To-Do List</h2>
        <input type="text" value = {newTask} onChange={handleTaskChange} placeholder='Enter Your Task'/>
        <button onClick={addTask}>Add Task</button>
        <ol>
            {tasks.map((task, index) => <li key = {index} onClick={() => deleteTask(index)}> {task} </li>)}
        </ol>
        </>
    )
}

export default Updater;