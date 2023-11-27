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
    const { SERVER_ERROR } = mediator.getEventTypes();
    mediator.subscribe(SERVER_ERROR, (data: TError) => {
        setError(data)
    });
    const loginRef = useRef<HTMLInputElement>(null);
    const nickRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);
    const clickHandler = async () => {
        setError(null);
        const login = loginRef.current!.value;
        const nickname = nickRef.current!.value;
        const password = passwordRef.current!.value;
        const verifyPassword = verifyRef.current!.value;
    
        if (!password || !verifyPassword) {
            setError({
                code: 9001,
                text: "Введите пароль и подтверждение пароля",
            });
        } else {
            if (password !== verifyPassword) {
                setError({
                    code: 9000,
                    text: "Пароли не совпадают",
                });
            } else {
                const register = await server.signUp(login, password, nickname);
                if (register) {
                    epages(EPAGES.MENU);
                }
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
                <ErrorMessage error={error} />
                <hr className="hr-SingUp" />
                <div className="estakk" onClick={() => epages(EPAGES.LOGIN)}>Уже есть аккаунт</div>
            </div>
        </div>
    );
};
export default SignUp;
