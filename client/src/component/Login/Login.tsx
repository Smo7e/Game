import React from 'react';

import "./Login.css";

const Login: React.FC = () => {

return (
    <div className='Login'>
        <div className="logoLogin"></div>
        <div className="containerLogin">
            <h3 className='containerLoginHeader'>Войти</h3>
            <form>
                <input className='loginInput' placeholder='Логин'/><br />
                <input className='loginInput' placeholder='Пароль'/><br />
                <input type='checkbox' id='galka' className='checkboxLogin'/><label className='checkboxLoginText' htmlFor='galka'>Не выходить из учетной записи</label><br />
                <button className='loginButton'>Продолжить</button><br />
                <hr className='hrLogin'/>
                <div className='otherButtonsLogin'>
                    <button className='otherButtonLogin'>Не можете войти?</button><br />
                    <button className='otherButtonLogin'>Создать учетную запись</button>
                </div>
            </form>
        </div>
    </div>
);
};

export default Login;