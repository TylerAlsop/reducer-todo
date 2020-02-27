import React from 'react';

const TodoItemCard = props => {
    // console.log("Props for the TaskCard", props);

    return (
        <div 
            className ={`task${props.item.completed ? " completed" : ""}`}
        >
            <p></p>

        </div>
    );
};

export default TodoItemCard