import React from 'react';

const TodoItemCard = props => {
    // console.log("Props for the TaskCard", props);

    return (
        <div 
            className ={`item${props.item.completed ? " completed" : ""}`}
            onClick={() => props.toggleCompleted(props.item.id)}
        >
            <p>{props.item.itemName}</p>

        </div>
    );
};

export default TodoItemCard