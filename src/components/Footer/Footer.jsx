import { Button } from '@mui/material'
import React from 'react'
import './Footer.css'

function Footer(props) {
    const {lengthTodo} = props
    return (
        <footer className="footer app__footer">
            <span className="footer__count">
                <strong className="todo__count">{lengthTodo}</strong>
                <strong>{lengthTodo > 1 ? ' items ' : ' item ' }left</strong>
            </span>
            <ul className="footer__filters">
                <li className="li__filters">
                    <p href="#" className="filters--all">All</p>
                    <p href="#/active" className="filters--active">Active</p>
                    <p href="#/completed" className="filters--completed">Completed</p>
                </li>
            </ul>
            <Button size="small">Clear completed</Button>
        </footer>
    )
}

export default Footer

