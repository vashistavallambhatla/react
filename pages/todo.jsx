import { useEffect, useState } from "react"
import Task from "../components/task"

const Todos = () => {
    const [tasks,setTasks] = useState([])
    const [taskName,setTaskName] = useState("")

    const handleClick = () => {
        if (taskName.trim()) { 
            setTasks(prevTasks => [...prevTasks, taskName])
            setTaskName("")
          }
    }

    return (
        <div>
            <h1>TASKS</h1>
            <input placeholder="Enter your task here:" value={taskName} onChange={(e) => {
                setTaskName(e.target.value)
            }}/>
            <button onClick={handleClick}>Enter</button>
            {
                tasks.map((task,index) => (
                    <Task taskName={task}/>
                ))
            }
        </div>
    )
}

export default Todos