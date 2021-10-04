import React from 'react'
import FormAdd from '../FormAdd/FormAdd'
import './FormTodolist.css'

function FormTodolist(props) {
    return (
        <div className="app">
            <form action="" className="form__todo">
                <input type="text" className="form__add" placeholder="What are you looking for ?" />
            </form>
            <ul className="list__todo">
                <li className="list__item">
                    <div className="item__title">
                        <p className="item__text grid__2">Name</p>
                        <p className="item__text">Quantity</p>
                        <p className="item__text">Date</p>
                        <p className="grid__6">Picture</p>
                        <FormAdd />
                    </div>
                </li>
                <li className="list__item">
                    <div className="item__view">
                        <i className="item__icon--check"></i>
                        <p className="item__text grid__2">Mua rau cu qua Mua rau cu quaMua rau cu quaMua rau cu qua</p>
                        <p className="item__text">5 cu 5 cu5 cu 5 cu5 cu5 cu5 cu5 cu</p>
                        <p className="item__text">04/10/2021</p>
                        <img className="grid__6" src="https://thienhuongtourist.com/user-upload/imgs/tour-du-lich-sapa-2-ngay-1-dem.png" alt="" />
                        <i className="icon__trash icon ion-md-trash"></i>
                    </div>
                </li>
            </ul>
        </div>
    )
}


export default FormTodolist

