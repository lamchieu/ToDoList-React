import { Button } from '@mui/material'
import React from 'react'
import './Footer.css'

function Footer(props) {
    return (
        <footer className="footer app__footer">
            <span className="footer__count">
                <strong className="todo__count">1 item left</strong>
            </span>
            <ul className="footer__filters">
                <li className="li__filters">
                    <a href="#" className="filters--all">All</a>
                    <a href="#/active" className="filters--active">Active</a>
                    <a href="#/completed" className="filters--completed">Completed</a>
                </li>
            </ul>
            <Button size="small">Clear completed</Button>
        </footer>
    )
}

export default Footer

