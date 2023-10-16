import React from "react";
import "./SignUp.css";
import logo from "./image/logo.png";
const SignUp: React.FC = () => {
    return (
        <div className="container-SignUp">
            <img className="logo-SignUp" src={logo} />
            <div className="text">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</div>
            <div className="form">
                <div className="text-register">Регистрация</div>
                <input className="input-SignUp" placeholder="Логин" />
                <input className="input-SignUp" placeholder="Никнейм" />
                <input className="input-SignUp" placeholder="Почта" />
                <input className="input-SignUp" placeholder="Пароль" />
                <input className="input-SignUp" placeholder="Подтвердите пароль" />
                <button className="reg-button">Регистрация</button>
                <br />
                <hr />
                <button className="estakk">Уже есть аккаунт</button>
            </div>
        </div>
    );
};
export default SignUp;
