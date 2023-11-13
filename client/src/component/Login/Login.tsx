import React from "react";

import "./Login.css";

const Login: React.FC = () => {
    return (
        <div className="Login">
            <div className="logoLogin"></div>
            <div className="containerLogin">
                <div className="containerLoginHeader">Войти</div>
                <div>
                    <input className="loginInput" placeholder="Логин" />
                    <input className="loginInput" placeholder="Пароль" />
                </div>

                <div className="checkboxLogin-container">
                    <input type="checkbox" className="checkboxLogin" />
                    <div className="checkboxLoginText">Не выходить из учетной записи</div>
                </div>

                <button className="loginButton">Продолжить</button>
                <hr className="hrLogin" />

                <div className="otherButtonsLogin">
                    <button className="otherButtonLogin">Не можете войти?</button>
                    <button className="otherButtonLogin">Создать учетную запись</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
