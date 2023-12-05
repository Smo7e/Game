import React, { useContext, useEffect, useRef, useState } from "react";
import md5 from "md5";
import { TError } from "../../modules";
import { EPAGES, ServerContext, MediatorContext } from "../../App";

import "./SignUp.css";
import logo from "./image/logo.png";
import ErrorMessage from "../../modules/ErrorMessage/ErrorMessage";

interface ISignProps {
    epages: Function;
}

const SignUp: React.FC<ISignProps> = ({ epages }) => {
    const mediator = useContext(MediatorContext);
    const server = useContext(ServerContext);

    const [error, setError] = useState<TError | null>(null);

    const loginRef = useRef<HTMLInputElement>(null);
    const nickRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);
    const clickHandler = async () => {
        setError(null)
        const login = loginRef.current!.value;
        const nickname = nickRef.current!.value;
        const password = passwordRef.current!.value;
        const verifyPassword = verifyRef.current!.value;

        const register = await server.signUp(login, password, nickname, verifyPassword);
        if (register) {
            epages(EPAGES.MENU);
        }
    };

    useEffect(() => {
        const { SERVER_ERROR } = mediator.getEventTypes();

        const serverErrorHandler = (error: TError) => {
            setError(error);
        };

        mediator.subscribe(SERVER_ERROR, serverErrorHandler);

        return () => {
            mediator.unsubscribe(SERVER_ERROR, serverErrorHandler);
        };
    });

    return (
        <div className="container-SignUp" id="test-container-SignUp">
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
                <ErrorMessage error={error} />
                <hr className="hr-SingUp" />
                <div className="estakk" id="test-estakk" onClick={() => epages(EPAGES.LOGIN)}>Уже есть аккаунт</div>
            </div>
        </div>
    );
};
export default SignUp;
