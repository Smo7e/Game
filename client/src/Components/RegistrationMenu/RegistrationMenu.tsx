import React from "react";
import logo from './logo.png';
import './RegistrationMenu.css';

export default class RegistrationMenu extends React.Component { 
    render() {
        return (
            <div className="container">
                <div className="header">
                    <img alt="logo" src={logo}></img>
                    <h1 className="text">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</h1>
                </div>
                <div className="form">
                    <form className="registrationForm">
                        <h3>Регистрация</h3>
                        <input type="text" name="Login" placeholder="Логин" id="" /><br/>
                        <input type="text" name="name" placeholder="Никнейм" id=""/><br/>
                        <input type="text" name="email" placeholder="Почта" id=""/><br/>
                        <input type="text" name="password" placeholder="Пароль" id=""/><br/>
                        <input type="text" name="passwordConfirm" placeholder="Подтвердите пароль" id=""/><br/>
                        <button className="reg-button">Регистрация</button><br/>
                        <hr/>
                        <button className="estakk">Уже есть аккаунт</button>
                    </form>
                </div>
            </div> 
        )
    }
}