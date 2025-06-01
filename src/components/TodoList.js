import React from "react";

export default  function TodoList ({todo,handleComplete}){
   
    return(
        <div>
            <ul>
                <li>
                {todo.title} 
                {todo.mark=="notComplete" ? <button onClick={()=>handleComplete(todo)}>Complete</button> : ""}
                </li>
            </ul>
        </div>
    )
}