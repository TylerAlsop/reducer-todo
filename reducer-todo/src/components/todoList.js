import React from 'react';

import TodoItemCard from "./TodoItemCard";

const TodoList = props => {

    return (
        <div className="todo-list">
            {/* {props.todoTasks.map(item => (
                <TodoItemCard  />
            ))} */}

            <button className="clear-completed-button">
                Clear Completed Tasks
            </button>

        </div>
    );
};

export default TodoList;