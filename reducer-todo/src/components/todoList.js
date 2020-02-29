import React from 'react';

import TodoItemCard from "./TodoItemCard";

const TodoList = props => {

    console.log("State in todoList", props.todoItems)

    return (
        <div className="todo-list">
            {props.todoItems.map(item => (
                <TodoItemCard 
                    key={item.id} 
                    item={item} 
                    todoItems={props.todoItems}
                    toggleCompleted={props.toggleCompleted}
                    />))}

            <button className="clear-completed-button">
                Clear Completed Tasks
            </button>

        </div>
    );
};

export default TodoList;