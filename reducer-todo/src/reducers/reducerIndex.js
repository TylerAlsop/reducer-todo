export const initialState = {
  todoItems: [
    {
      itemName: 'Learn about reducers',
      completed: false,
      id: Date.now()
    }
  ]

};

  
export const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        itemName: action.payload,
        completed: false,
        id: Date.now()
      }
      return { ...state, todoItems: [...state.todoItems] newItem  };
    default:
      return state;
  }
};
  





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