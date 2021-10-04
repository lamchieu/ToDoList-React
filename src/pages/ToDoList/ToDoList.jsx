import { Box, Button, FormControl, Modal, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import FormTodolist from '../../components/FormTodolist/FormTodolist';
import './ToDoList.css';

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '450px',
        backgroundColor: '#fff',
        boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
        padding: '16px 32px 24px'
    },

    formControl: {
        paddingRight: '54px !important'
    }
});

function ToDoList(props) {
    const classes = useStyles();
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

