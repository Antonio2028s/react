import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://sun9-west.userapi.com/sun9-52/s/v1/ig2/U-8o-Jhqn00O1nT2ywCcnY8rcmnTGGk32bWgq1F9h_a5oELuIdUbM3Y7yrTYao5KjoZnnihPItbNrRG7m8zaa79r.jpg?size=900x860&quality=96&type=album' />

        <div className={s.loginBlock}>
            { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;