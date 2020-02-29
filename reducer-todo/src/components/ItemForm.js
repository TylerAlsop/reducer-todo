import React, { useState } from 'react';

const ItemForm = (props) => {
    const [itemName, setItemName] = useState("")

    console.log("This is the state from the Form", props.todoItems)

    const handleChanges = e => {
    setItemName(e.target.value);
    };

    const submitItem = e => {
        e.preventDefault();
        props.addItem(itemName);
        setItemName("");
    }

    return (
        <form onSubmit={submitItem}>
            <input type="text" name="item" value={itemName} onChange={handleChanges}/>
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