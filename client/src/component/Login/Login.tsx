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
                <input type='checkbox' className='checkbox'/><label className='checkboxText'>Не выходить из учетной записи</label><br />
                <button className='loginButton'>Продолжить</button><br />
                <hr />
                <button className='otherButton'>Не можете войти?</button>
                <button className='otherButton'>Создать учетную запись</button>
            </form>
        </div>
    </div>
);
};

export default Login;