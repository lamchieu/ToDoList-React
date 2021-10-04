import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormTodolist from '../../components/FormTodolist/FormTodolist';
import './ToDoList.css';

function ToDoList(props) {
    //modal

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
            <FormTodolist />
        </div>
    )
}


export default ToDoList

