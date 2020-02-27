import React, { useState, useReducer} from 'react';

import TodoList from './components/TodoList';
import ItemForm from './components/ItemForm';

import { initialState, todoListReducer } from './reducers/reducerIndex';

import "./components/Todo.css"



function App() {
  const [todoTasks, setTodoTasks] = useState();

  const [state, dispatch] = todoListReducer()



  return (
    <div className="app">
      <div className="header">
        <h2 className="welcome-message">Welcome to your Todo App!</h2>
        <ItemForm />
      </div>
      <div className="todo-list">
        <TodoList />
      </div>
    </div>
  );
}

export default App;


  // const addTask = (e, task) => {
  //   e.preventDefault();

  //   const newTask = {
  //     item: task,
  //     completed: false,
  //     id: Date.now(),
  //   }

  //   setTodoTasks({
  //     todoTasks: [...todoTasks, newTask]
  //   });
  // };

  // const toggleTaskCompletion = taskId => {
  //   // console.log("toggleTaskCompletion", taskId)

  //   setTodoTasks({
  //     todoTasks: todoTasks.map(task => {
  //       // console.log(task);

  //       if (taskId === task.id) {
  //         return {
  //           ...task,
  //           completed: !todoTasks.completed
  //         };
  //       }

  //       return task;
  //     })
  //   });
  // };

  // const clearCompleted = e => {
  //   e.preventDefault();
  //   // console.log(this.state.todoTasks);
  //   setTodoTasks({
  //     todoTasks: todoTasks.filter(task => task.completed === false)
  //   });
  //   // console.log(this.state.todoTasks);
  // }