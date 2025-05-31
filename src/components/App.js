
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos]= useState([
    {title:"Learn React",
    completed:false}, 
    {title:"Build a React App",
    completed:false}, 
    {title:"Deploy a React app",
    completed:false
  }]);

  const handleComplete = (todo)=>{
    const filterData = todos.map((item)=>
      item.title===todo.title? {...item,completed:true}:item)
    setTodos(filterData);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Child Component</h2>
      {todos.map((todo,index)=>{
        return <TodoList todo={todo} key={index} handleComplete={handleComplete}/>
      })}
    </div>
  )
}

export default App
