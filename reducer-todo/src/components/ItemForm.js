import React from 'react';

const ItemForm = (props) => {

    // const changeHandler = e => {
    //     setState({ [e.target.name]: e.target.value });
    //     // console.log("This is the state from the Form", this.state)
    // };

    // const submitTask = e => {
    //     e.preventDefault();
    //     props.addTask(e, state.item);
    // };

    return (
        <form onSubmit={props.changeItemName}>
            <input type="text" name="task" onChange={props.handleChanges}/>
            <button>Add Task</button>
        </form>
    );
};

export default ItemForm