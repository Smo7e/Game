import React, { useContext, useEffect } from "react";
import md5 from 'md5';
import { TError } from "../../modules";
import { EPAGES, ServerContext, MediatorContext } from "../../App";

import "./SignUp.css";
import logo from "./image/logo.png";

interface ISignProps {
    epages: Function;
}

const SignUp: React.FC<ISignProps> = ({ epages }) => {
    const mediator = useContext(MediatorContext);
    const server = useContext(ServerContext);

    const clickHandler = async () => {
        const login = 'vasya';
        const password = '123';
        const rnd = Math.round(Math.random() * 1000000);
        const hash = md5(md5(login+password)+rnd);
        const user = await server.login(login, hash, rnd);

        if (user) {
            epages(EPAGES.MENU);
        }
    }

    useEffect(() => {
        const { SERVER_ERROR } = mediator.getEventTypes();

        const serverErrorHandler = (error: TError) => {
            console.log(error);
        }

        mediator.subscribe(SERVER_ERROR, serverErrorHandler);

        return () => {
            mediator.unsubscribe(SERVER_ERROR, serverErrorHandler);
        }
    });

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
                <button onClick={clickHandler} className="reg-button">
                    Регистрация
                </button>
                <br />
                <br />
                <br />

                <hr className="hr-SingUp" />
                <div className="estakk">Уже есть аккаунт</div>
            </div>
        </div>
    );
};
export default SignUp;
