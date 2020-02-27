import React, { useState, useReducer} from 'react';

import TodoList from './components/TodoList';
import ItemForm from './components/ItemForm';

import { initialState, todoListReducer } from './reducers/reducerIndex';

import "./components/Todo.css"



const App = () => {
  const [todoItems, setTodoItems] = useState();

  const [state, dispatch] = useReducer(todoListReducer, initialState);

  console.log("State in App.js", state);

  const handleChanges = e => {
    setTodoItems(e.target.value);
  };

  const changeItemName = e => {
    dispatch({ type: "CHANGE_ITEM_NAME", payload: todoItems });
  };

  
  return (
    <div className="app">
      <div className="header">
        <h2 className="welcome-message">Welcome to your Todo App!</h2>
        <ItemForm handleChanges={handleChanges} changeItemName={changeItemName} todoItems={todoItems}/>
      </div>
      <div className="todo-list">
        <TodoList state={state} todoItems={todoItems} />
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