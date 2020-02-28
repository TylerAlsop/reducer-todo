import React from 'react';

const ItemForm = (props) => {

  console.log("This is the state from the Form", props.todoItems)

    return (
        <form onSubmit={props.addItem}>
            <input type="text" name="item" value={props.todoItems} onChange={props.handleChanges}/>
            <button>Add Task</button>
        </form>
    );
};

export default ItemForm




  // const changeHandler = e => {
    //     setState({ [e.target.name]: e.target.value });
    //     // console.log("This is the state from the Form", this.state)
    // };

    // const submitTask = e => {
    //     e.preventDefault();
    //     props.addTask(e, state.item);
    // };