import React from "react";
import "./SignUp.css";
import logo from "./image/logo.png";
import { EPAGES } from "../../App";
interface ISignProps {
    epages: Function;
}
const SignUp: React.FC<ISignProps> = ({ epages }) => {
    return (
        <div className="container-SignUp">
            <img className="logo-SignUp" src={logo} />
            <div className="text-SignUp">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</div>
            <div className="form-SignUp">
                <div className="text-register">Регистрация</div>
                <input className="input-SignUp" placeholder="Логин" />
                <input className="input-SignUp" placeholder="Никнейм" />
                <input className="input-SignUp" placeholder="Почта" />
                <input className="input-SignUp" placeholder="Пароль" />
                <input className="input-SignUp" placeholder="Подтвердите пароль" />
                <button onClick={() => epages(EPAGES.MENU)} className="reg-button">
                    Регистрация
                </button>
                <br />
                <br />
                <br />

                <hr />
                <div className="estakk">Уже есть аккаунт</div>
            </div>
        </div>
    );
};
export default SignUp;
