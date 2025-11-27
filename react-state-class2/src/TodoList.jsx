import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample task", id: uuidv4(), isDone: false}])
    let [newTodos, setNewTodos] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            console.log(newTodos)
            return [...prevTodos, {task: newTodos, id: uuidv4(), isDone: false}]
    })
        setNewTodos("")
    }
    let updateTodoValue = (event) => {
        setNewTodos(event.target.value)
    }
    let deleteTask = (id) => {
        setTodos((prevTodos) => todos.filter((todo) => todo.id != id))
    }
    let doneTask = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if (todo.id == id){
                return {
                    ...todo,
                    isDone: true
                };
            } else {
                return todo; 
            }
        }))
    }
    


    return (
        <div>
            <input placeholder="Add a Task" value={newTodos} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Submit</button>
            <br></br>
            <hr></hr>
            <h4>Todo Task</h4>
            <ul>
                {
                     todos.map((todo) => (
                        <li key={todo.id}><span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}> {todo.task}</span>
                        &nbsp; &nbsp; &nbsp;
                        <button onClick={() => deleteTask(todo.id)}>Delete</button>
                        <button onClick={() => doneTask(todo.id)}>Done</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}