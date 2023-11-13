import React, { useContext, useEffect, useRef } from "react";
import md5 from "md5";
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

    const loginRef = useRef<HTMLInputElement>(null);
    const nickRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);
    const clickHandler = async () => {
        const login = loginRef.current!.value;
        const nickname = nickRef.current!.value;
        const password = passwordRef.current!.value;
        const verifyPassword = verifyRef.current!.value;

        if (password === verifyPassword && nickname && login) {
            const register = await server.signUp(login, password, nickname);
            if (register) {
                epages(EPAGES.MENU);
            }
        }
    };

    useEffect(() => {
        const { SERVER_ERROR } = mediator.getEventTypes();

        const serverErrorHandler = (error: TError) => {
            console.log(error);
        };

        mediator.subscribe(SERVER_ERROR, serverErrorHandler);

        return () => {
            mediator.unsubscribe(SERVER_ERROR, serverErrorHandler);
        };
    });

    return (
        <div className="container-SignUp">
            <img className="logo-SignUp" src={logo} />
            <div className="text-SignUp">СОЗДАТЬ УЧЕТНУЮ ЗАПИСЬ</div>
            <div className="form-SignUp">
                <div className="text-register">Регистрация</div>
                <input ref={loginRef} className="input-SignUp" placeholder="Логин" />
                <input ref={nickRef} className="input-SignUp" placeholder="Никнейм" />
                <input ref={passwordRef} className="input-SignUp" placeholder="Пароль" />
                <input ref={verifyRef} className="input-SignUp" placeholder="Подтвердите пароль" />
                <button onClick={clickHandler} className="reg-button">
                    Регистрация
                </button>
                <br />
                <br />
                <br />

                <hr className="hr-SingUp" />
                <div className="estakk" onClick={() => epages(EPAGES.LOGIN)}>Уже есть аккаунт</div>
            </div>
        </div>
    );
};
export default SignUp;
