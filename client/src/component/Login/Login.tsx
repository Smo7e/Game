import React from 'react';

import "./Login.css";

const Login: React.FC = () => {

return (
    <div className='Login'>
        <div className="logo"></div>
        <div className="container">
            <h3 className='containerHeader'>Войти</h3>
            <form>
                <input className='loginInput' placeholder='Логин'/><br />
                <input className='loginInput' placeholder='Пароль'/><br />
                <input type='checkbox' id='galka' className='checkbox'/><label className='checkboxText' htmlFor='galka'>Не выходить из учетной записи</label><br />
                <button className='loginButton'>Продолжить</button><br />
                <hr />
                <div className='otherButtons'>
                    <button className='otherButton'>Не можете войти?</button><br />
                    <button className='otherButton'>Создать учетную запись</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default Login;