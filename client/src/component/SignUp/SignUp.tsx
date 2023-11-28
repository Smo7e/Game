import React, { useContext, useEffect, useRef, useState } from "react";
import { TError } from "../../modules";
import { EPAGES, MediatorContext } from "../../App";

import "./SignUp.css";
import logo from "./image/logo.png";
import ErrorMessage from "../../modules/ErrorMessage/ErrorMessage";
import useSignUpVerification from "./useSignUpVerification";

interface ISignProps {
    epages: Function;
}

const SignUp: React.FC<ISignProps> = ({ epages }) => {

    const [error, setError] = useState<TError | null>(null);
    const mediator = useContext(MediatorContext);
    const { SERVER_ERROR } = mediator.getEventTypes();
    
    const loginRef = useRef<HTMLInputElement>(null);
    const nickRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const verifyRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const serverErrorHandler = (error: TError) => {
            setError(error);
        };
        
        mediator.subscribe(SERVER_ERROR, serverErrorHandler);
        
        return () => {
            mediator.unsubscribe(SERVER_ERROR, serverErrorHandler);
        };
    });

    const verifySignUp = useSignUpVerification(
        loginRef,
        nickRef,
        passwordRef,
        verifyRef,
        setError,
    );

    const clickHandler = async () => {
    const registrationSuccessful = await verifySignUp();

    if (registrationSuccessful) {
        epages(EPAGES.MENU);
    }
    };

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
