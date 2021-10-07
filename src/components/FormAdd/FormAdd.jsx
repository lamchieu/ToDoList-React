import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from "yup";
import './FormAdd.css';

const useStyles = makeStyles({
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        backgroundColor: '#fff',
        boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 14px 0px rgb(0 0 0 / 12%)',
        padding: '30px',
        borderRadius: '5px'
    },

    typography: {
        color: '#205d91'
    },

    formControl: {
        paddingRight: '54px !important'
    },

    button: {
        margin: '10px 0 !important'
    }
});

function FormAdd(props) {
    const classes = useStyles();
    //yup
    const schema = yup.object().shape({
        name: yup.string().required("*Name is required"),
        url: yup.string().url().required("*Url is required"),
        quantity: yup.number().test(
            'Is positive?', 
            'The number must be greater than 0', 
            (value) => value > 0
        ),
        date: yup.date().required('*Date is required')
    })

    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        defaultValues: {
            name: '',
            url: '',
            quantity: '',
            date: ''
        },
        resolver: yupResolver(schema)
    });

    //form
    const onSubmit = (data) => {
        props.addToDo(data);
        reset()
    };

    //modal
    const [open, setOpen] = useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }
    const handleCloseModal = () => {
        setOpen(false)
    }

    return (
        <div className="item__add">
            <Button className={classes.button} type="button" color="primary" variant="outlined" size="small" onClick={handleOpenModal}>Add task</Button>

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography variant="h5" align="center" pb={4} className={classes.typography}>
                        ADD TASK
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                <TextField value={value} onChange={onChange} size="small"
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    error={invalid}
                                    helperText={error?.message}
                                />
                            )}
                        ></Controller>

                        <Controller
                            name="url"
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                <TextField value={value} onChange={onChange} size="small"
                                    label="Url"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    error={invalid}
                                    helperText={error?.message}
                                />
                            )}
                        ></Controller>

                        <Controller
                            name="quantity"
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                <TextField value={value} onChange={onChange} size="small"
                                    type="number"
                                    label="Quantity"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    error={invalid}
                                    helperText={error?.message}
                                />
                            )}
                        ></Controller>

                        <Controller
                            control={control}
                            name="date"
                            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                <TextField
                                    size="small"
                                    label="Date"
                                    type="date"
                                    error={invalid}
                                    helperText={error?.message}
                                    value={value}
                                    margin="normal"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={onChange}
                                />
                            )}
                        ></Controller>

                        <div className="submit">
                            <Button variant="contained" color="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </form>

                </Box>
            </Modal>
        </div>
    )
}


export default FormAdd

