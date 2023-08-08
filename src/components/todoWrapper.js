import React, { useState } from "react";
import Todo from "./todo";
import TodoForm from "./todoForm";
import { v4 as uuidv4 } from "uuid";
import EditTodo from "./editTodo";
uuidv4();

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const togleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

 const editTask=(task,id)=>{setTodos(todos.map(todo=>todo.id===id ?
  {...todo,task,isEditing:!todo.isEditing}
  :todo))}
  return (
    <div className="TodoWrapper">
      <h1>Get Things Done...</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} key={index} />
        ) : (
          <Todo
            task={todo}
            key={index}
            togleCompleted={togleCompleted}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
