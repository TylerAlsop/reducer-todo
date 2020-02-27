import React from 'react';

import TodoItemCard from "./TodoItemCard";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.todoTasks.map(task => (
                <TodoItemCard 
                    key={task.id} 
                    task={task} 
                    toggleTaskCompletion={props.toggleTaskCompletion} />
            ))}

            <button className="clear-completed-button" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>

        </div>
    );
};

export default TodoList;