import React from 'react'
import { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [editIndex, setEditIndex] = useState(null);

    const handleTask = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () => {
        if(newTask.trim() !== ""){
            if(editIndex !== null){
                setTasks(tasks.map((task, index) =>
                    index === editIndex ? newTask : task));
                setEditIndex(null);
            }else{
                setTasks(prevTasks => [...prevTasks,newTask]);
            }
        setNewTask("");
        }
    }
    const removeTask = (i) => {
        setTasks(tasks.filter((_, index) => index !== i));
        if(editIndex === i){
            setEditIndex(null);
            setNewTask("");
        }
    }

    const editTask = (i) => {
        setNewTask(tasks[i]);
        setEditIndex(i);
    }

  return (
    <div>
      <input type="text" value={newTask} onChange={handleTask} placeholder='Enter Your Task'/>
      <button onClick={addTask}>{editIndex !== null ? "Update Task" : "Add Task"}</button>
      <ol>
        {tasks.map((task, index) => 
        <li key={index}>
            {task}
            <button onClick={() => editTask(index)}>Edit</button>
            <button onClick={() => removeTask(index)}>Delete</button>
        </li>
        )}
      </ol>      
    </div>
  )
}

export default Todo
