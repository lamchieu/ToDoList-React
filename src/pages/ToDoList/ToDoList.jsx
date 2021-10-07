import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import FormTodo from '../../components/FormTodo/FormTodo';
import './ToDoList.css';

function ToDoList(props) {
    const [open, setOpen] = useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }
    const handleCloseModal = () => {
        setOpen(false)
    }


    //form
    const { handleSubmit, control, reset } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="todo">
            <h1>TO DO LIST</h1>
            <FormTodo />
        </div>
    )
}


export default ToDoList

