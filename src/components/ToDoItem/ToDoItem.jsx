import { TextField } from '@mui/material'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import './ToDoItem.css'


function ToDoItem(props) {


    const { id, name, quantity, date, url, complete } = props.todo
    const { handleDelete, handleUpdate, handleCheckBox, todo } = props

    const [nameValue, setName] = useState(name)
    const [quantityValue, setQuantity] = useState(quantity)
    const [dateValue, setDate] = useState(date)
    const [urlValue, setUrl] = useState(url)
    const [openEdit, setOpenEdit] = useState(false)
    const [check, setCheck] = useState(complete)

    const toggleOpenValueEdit = () => {
        setOpenEdit(!openEdit)
    }

    const convert = (datetime) => {
        let date = new Date(datetime),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("-");
    }

    const convertDateForm = (datetime) => {
        let date = new Date(datetime),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
        return [date.getFullYear(), mnth, day].join("-");
    }

    const changeValueName = (e) => {
        setName(e.target.value)
    }

    const changeValueUrl = (e) => {
        setUrl(e.target.value)
    }

    const changeValueDate = (e) => {
        setDate(e.target.value)
    }

    const changeValueQuantity = (e) => {
        setQuantity(e.target.value)
    }

    //ERROR
    const [errors, setErrors] = useState([]);
    const validate = () => {
        const errors = [];
        if (quantityValue < 0) {
            errors.push("The number must be greater than 0")
        }
        return errors
    }

    //EDIT
    const handelEdit = () => {
        const errors = validate();
        if (errors.length > 0) {
            setErrors(errors);
            return;
        }

        if (nameValue && nameValue !== name || dateValue && dateValue !== date || quantityValue > 0 && quantityValue !== quantity || urlValue && urlValue !== url) {
            const newTodo = {
                ...todo,
                name: nameValue,
                date: dateValue,
                quantity: quantityValue,
                url: urlValue
            }
            handleUpdate(newTodo.id, newTodo)
        }
        toggleOpenValueEdit()
    }

    const handleCheck = () => {
        setCheck(!check)
        const newTodo = {
            ...todo,
            complete: !complete
        }
        handleUpdate(newTodo.id, newTodo)
    }

    return (
        <li className={'list__item' && check ? 'checked' : null}>
            {!openEdit &&
                <div className="item__view">
                    {!check &&
                        <i className="ion-ios-radio-button-off item__icon"
                            type="checkbox"
                            checked={check}
                            onClick={handleCheck}
                        />
                    }
                    {
                        check &&
                        <i className="icon ion-ios-checkmark-circle-outline item__icon"
                            type="checkbox"
                            checked={check}
                            onClick={handleCheck}
                        />
                    }
                    <p className="item__text item__border grid__2">{nameValue}</p>
                    <p className="item__text item__border">{quantityValue}</p>
                    <p className="item__text item__border">{convert(dateValue)}</p>
                    <img className="item__text" src={urlValue} alt={urlValue} />
                    <div className="item__icon grid__6">
                        <i className="icon__edit ion-md-create" onClick={toggleOpenValueEdit}></i>
                        <i className="icon__trash icon ion-md-trash" onClick={() => handleDelete(id)}></i>
                    </div>
                </div>
            }
            {openEdit &&
                <div className="item__view">
                    <TextField
                        size="small"
                        className="gridUI__2"
                        id="outlined-required"
                        value={nameValue}
                        onChange={changeValueName}
                        helperText={errors[1]}
                    />

                    <TextField
                        className="gridUI"
                        size="small"
                        type="number"
                        id="outlined-required"
                        value={quantityValue}
                        onChange={changeValueQuantity}
                        helperText={errors[0]}
                        error={errors[0]}
                    />

                    <TextField
                        className="gridUI"
                        size="small"
                        id="outlined-required"
                        value={convertDateForm(dateValue)}
                        onChange={changeValueDate}
                        type="date"
                    />
                    <TextField
                        className="gridUI"
                        size="small"
                        id="outlined-required"
                        value={urlValue}
                        onChange={changeValueUrl}
                    />

                    <div className="item__icon grid__5">
                        <i className="icon__edit ion-md-checkmark" type="submit" onClick={handelEdit}></i>
                    </div>
                </div>
            }
        </li>
    )
}

export default ToDoItem

