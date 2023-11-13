import React, { useContext, useRef } from "react";
import "./Login.css";
import { EPAGES, MediatorContext, ServerContext } from "../../App";
import md5 from "md5";
interface ILoginProps {
    epages: Function;
}
const Login: React.FC<ILoginProps> = ({ epages }) => {
    const mediator = useContext(MediatorContext);
    const server = useContext(ServerContext);

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const clickHandler = async () => {
        const login = loginRef.current!.value;
        const password = passwordRef.current!.value;
        const rnd = Math.round(Math.random() * 1000000);
        const hash = md5(md5(login + password) + rnd);
        const user = await server.login(login, hash, rnd);
        if (user) {
            epages(EPAGES.MENU);
        }
    };
    return (
        <div className="Login">
            <div className="logoLogin"></div>
            <div className="containerLogin">
                <div className="containerLoginHeader">Войти</div>
                <div>
                    <input ref={loginRef} className="loginInput" placeholder="Логин" />
                    <input ref={passwordRef} type="password" className="loginInput" placeholder="Пароль" />
                </div>

                <div className="checkboxLogin-container">
                    <input type="checkbox" className="checkboxLogin" />
                    <div className="checkboxLoginText">Не выходить из учетной записи</div>
                </div>

                <button className="loginButton" onClick={clickHandler}>
                    Продолжить
                </button>
                <hr className="hrLogin" />

                <div className="otherButtonsLogin">
                    <button className="otherButtonLogin">Не можете войти?</button>
                    <button className="otherButtonLogin" onClick={() => epages(EPAGES.SIGNUP)}>
                        Создать учетную запись
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
