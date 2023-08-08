import React, { useState } from "react";

function TodoForm({ addTodo }) {
  console.log(addTodo);
  const [value, setValue] = useState("");

  const [err,setErr]=useState("")

  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(!value.trim()){
      setErr("add item...!!!")
      return;
    }
    addTodo(value);

    setValue("");

  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input  
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is the task?"
        onChange={(e) => {
          setValue(e.target.value);
          setErr("")

        }}
      />
      
      <button  type="submit" className="todo-btn">

        Add Task
      </button>
      {err?<p style={{color:'red'}} >{err}</p>:""}
    </form>
  );
}

export default TodoForm;
