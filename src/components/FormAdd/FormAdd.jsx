import { Button, FormControl, Modal, TextField, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Controller, useForm } from 'react-hook-form';
import FormTodolist from '../../components/FormTodolist/FormTodolist';
import './FormAdd.css'

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

function FormAdd(props) {
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
        <div>
            <Button type="button" color="primary" variant="outlined" size="small" onClick={handleOpenModal}>Add task</Button>

            <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Typography variant="h5" align="center" pb={4}>
                        ADD TASK
                    </Typography>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                <TextField value={value} onChange={onChange} size="small"
                                    required
                                    label="Name"
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    error={invalid}
                                    helperText={error?.message}
                                />
                            )}
                        ></Controller>

                        <FormControl className={classes.formControl}>
                            <Controller
                                name="quantity"
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                    <TextField value={value} onChange={onChange} size="small"
                                        required
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
                        </FormControl>

                        <FormControl>
                            <Controller
                                control={control}
                                name="date"
                                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                    <TextField 
                                        size="small"
                                        required
                                        label="Date"
                                        type="date"
                                        error={invalid}
                                        helperText={error?.message}
                                        value={value}
                                        margin="normal"
                                        formate="MMM/dd/yyyy"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={onChange}
                                    />
                                )}
                            ></Controller>
                        </FormControl>

                        <FormControl>
                            <Controller
                                name="file"
                                control={control}
                                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                                    <TextField value={value} onChange={onChange}
                                        size="small"
                                        type="file"
                                        margin="normal"
                                        variant="standard"
                                        fullWidth
                                        error={invalid}
                                        helperText={error?.message}
                                    />
                                )}
                            ></Controller>
                        </FormControl>

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

