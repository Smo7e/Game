import React from 'react';

import "./Login.css";

const Login: React.FC = () => {

return (
<div className='Login'>
    <div className="logo"></div>
    <div className="photo">
        <div className="container-button">
            <button className="button">Продолжить</button>
        </div>
        <div className="text">Войти</div>
        <div className="container-text">
            <button className="text-button">Не можете войти?</button>
        </div>
        <div className="container-text2">
            <button className="text-button2">Создать учетную запись</button>
        </div>
        <div className="container-login">
            <button className="button-login">Логин</button>
        </div>
        <div className="container-password">
            <button className="button-password">Пароль</button>
        </div>
        <div className="check">
            <form>
                <label>
                    <input type="checkbox"/>Не выходить из учетной записи
                </label>
            </form>
        </div>
    </div>
</div>
);
};

export default Login;