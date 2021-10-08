import { cloneDeep } from 'lodash';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../Footer/Footer';
import FormAdd from '../FormAdd/FormAdd';
import ToDoItem from '../ToDoItem/ToDoItem';
import './FormTodo.css';

const getToDo = () => {
    const data = localStorage.getItem('todos');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

function FormTodo(props) {

    const [todoData, setData] = useState(getToDo())

    //localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todoData))
    }, [todoData])

    //ADD TODO
    const addTodo = (data) => {
        const initData = {
            id: uuidv4(),
            name: data.name,
            quantity: data.quantity,
            date: data.date,
            url: data.url,
            complete: false,
        }

        const newData = cloneDeep(todoData)
        newData.push(initData)
        setData(newData)
    }

    //DELETE TODO
    const handleDelete = (id) => {
        const newData = cloneDeep(todoData)
        setData(newData.filter((todo) => todo.id !== id))
    }

    //UPDATE TODO
    const handleUpdate = (id, updateTodo) => {
        const newData = cloneDeep(todoData)
        setData(newData.map((todo) => todo.id === id ? updateTodo : todo))
    }

    return (
        <div className="app">
            <div className="app__todo">
                <form action="" className="form__todo">
                    <input type="text" className="form__add" placeholder="What are you looking for ?" />
                </form>
                <div className="item__title">
                    <i className="item__fb ion-logo-facebook"></i>
                    <p className="item__text item__border grid__2">Name</p>
                    <p className="item__text item__border">Quantity</p>
                    <p className="item__text item__border">Date</p>
                    <p className="item__text">Image</p>
                    <FormAdd addToDo={addTodo} />
                </div>
                <ul className="list__todo">
                    {
                        todoData.length > 0 && todoData.map(todo =>
                            <ToDoItem
                                key={todo.id}
                                todo={todo}
                                handleDelete={handleDelete}
                                handleUpdate={handleUpdate}
                            />
                        )
                    }
                </ul>
            </div>
            <Footer lengthTodo={todoData.length} />
        </div>
    )
}
export default FormTodo

