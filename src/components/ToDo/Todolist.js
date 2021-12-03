import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import "./Todo.css";
import { Container } from "react-bootstrap";
import AuthInfo from "../Routing/AuthInfo";
import { useAuth } from "../../contexts/AuthContext";
import Logout from "../Auth/Logout";
import "../../index.css";
import "../../Footer";

function Todolist() {
  const { currentUser } = useAuth();
  const [todos, setTodos] = useState([]);

  //magic of the todo form
  //creating the add functionality to the todo
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    //passing it into these set of todos
    setTodos(newTodos);
    //test if working
    //storing data in console
    console.log(todo, ...todos);
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  //creating the edit function
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        //toggling between t/f
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  <AuthInfo />;
  return (
    <todo-Container>
      <div>
        <h1 className="m-4 text-black text-center">HELLO! Do your chores...</h1>
        {/* logic to add or remove */}
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
      {currentUser && <Logout />}
    </todo-Container>
  );
}

export default Todolist;
