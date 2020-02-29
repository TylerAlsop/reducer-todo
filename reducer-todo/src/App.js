import React, { useState, useReducer} from 'react';

import TodoList from './components/TodoList';
import ItemForm from './components/ItemForm';

import { initialState, todoListReducer } from './reducers/reducerIndex';

import "./components/Todo.css"



const App = () => {

  const [state, dispatch] = useReducer(todoListReducer, initialState);

  // const [todoItems, setTodoItems] = useState(state.todoItems);


  console.log("State in App.js", state);


  const addItem = (name) => {

    const newItem = {
      itemName: name,
      completed: false,
      id: Date.now()
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  }

  const toggleCompleted = itemId => {
    const completedTodoItems = state.todoItems.map(item => {
      console.log("item in toggleCompleted", item);
      if (itemId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item
    })
    console.log("TodoItems in toggleCompleted", state.todoItems)
    dispatch({type: "TOGGLE_COMPLETED", payload: completedTodoItems})
  };

 

  console.log("state.todoItems in App.js", state.todoItems)
  
  return (
    <div className="app">
      <div className="header">
        <h2 className="welcome-message">Welcome to your Todo App!</h2>
        <ItemForm addItem={addItem}/>
      </div>
      <div className="todo-list">
        <TodoList 
          todoItems={state.todoItems} 
          toggleCompleted={toggleCompleted} />
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