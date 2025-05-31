
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos]= useState([
    {title:"Learn React",
    mark:"notComplete"}, 
    {title:"Build a React App",
    mark:"notComplete"}, 
    {title:"Deploy a React app",
    mark:"notComplete"
  }]);

  const handleComplete = (todo)=>{
    const filterData = todos.map((item)=>
      item.title===todo.title? {...item,mark:"completed"}:item)
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
