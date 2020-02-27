import React from 'react';

import TodoItemCard from "./TodoItemCard";

const TodoList = props => {

    return (
        <div className="todo-list">
            {props.state.map(item => (
                <TodoItemCard key={item.id} item={item} state={props.state} todoItems={props.todoItems}/>
            ))}

            <button className="clear-completed-button">
                Clear Completed Tasks
            </button>

        </div>
    );
};

export default TodoList;