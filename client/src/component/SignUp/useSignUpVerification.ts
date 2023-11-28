import { RefObject, Dispatch, SetStateAction, useContext } from "react";
import { TError } from "../../modules";
import { ServerContext } from "../../App";

const useSignUpVerification = (
    loginRef: RefObject<HTMLInputElement>,
    nickRef: RefObject<HTMLInputElement>,
    passwordRef: RefObject<HTMLInputElement>,
    verifyRef: RefObject<HTMLInputElement>,
    setError: Dispatch<SetStateAction<TError | null>>,
) => {
    const server = useContext(ServerContext);

    const verifySignUp = async () => {
        const login = loginRef.current!.value;
        const nickname = nickRef.current!.value;
        const password = passwordRef.current!.value;
        const verifyPassword = verifyRef.current!.value;

        if (!login || !nickname) {
            setError({
                code: 1499,
                text: "Введите логин и никнэйм",
            });
            return false;
        } else if (!password || !verifyPassword) {
            setError({
                code: 1500,
                text: "Введите пароль и подтверждение пароля",
            });
            return false;
        } else if (password !== verifyPassword) {
            setError({
                code: 1501,
                text: "Пароли не совпадают",
            });
            return false;
        } else {
            const register = await server.signUp(login, password, nickname);
            if (!register) {
                return false;
            }
        }
        return true;
    };

    return verifySignUp;
};

export default useSignUpVerification;
