import React from 'react';

const TodoItemCard = props => {
    // console.log("Props for the TaskCard", props);

    return (
        <div 
            className ={`task${props.task.completed ? " completed" : ""}`}
            onClick={() => props.toggleTaskCompletion(props.task.id)}
        >
            <p>{props.task.taskName}</p>

        </div>
    );
};

export default TodoItemCard