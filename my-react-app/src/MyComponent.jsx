import { useState } from "react"

function MyComponent(){
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    function addTask(){
        task = setTask(prompt("input a task"))
    }

    return(
        <>

            <button>add</button>

        </>
    )
}

export default MyComponent