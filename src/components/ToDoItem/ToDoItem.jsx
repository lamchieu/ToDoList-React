import { TextField } from '@mui/material'
import React, { useState } from 'react'
import './ToDoItem.css'


function ToDoItem(props) {

    const { id, name, quantity, date, url, complete } = props.todo
    const { handleDelete, handleUpdate, handleCheckBox, todo } = props

    //edit
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
        return [mnth, day, date.getFullYear()].join("/");
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

    //EDIT
    const handelEdit = () => {
        if (nameValue && nameValue !== name || date && dateValue !== date || quantity && quantityValue !== quantity || url && urlValue !== url) {
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
        <li className={'list__item' && check ? null : 'checked'}>
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
                    />

                    <TextField
                        className="gridUI"
                        size="small"
                        type="number"
                        id="outlined-required"
                        value={quantityValue}
                        onChange={changeValueQuantity}
                    />

                    <TextField
                        className="gridUI"
                        size="small"
                        id="outlined-required"
                        value={convert(dateValue)}
                        onChange={changeValueDate}
                    />
                    <TextField
                        className="gridUI"
                        size="small"
                        id="outlined-required"
                        value={urlValue}
                        onChange={changeValueUrl}
                    />

                    <div className="item__icon grid__5">
                        <i className="icon__edit ion-md-checkmark" onClick={handelEdit}></i>
                    </div>
                </div>
            }
        </li>
    )
}

export default ToDoItem

