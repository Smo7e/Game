import { TUser, TError } from "./types";

export default class Server {
    HOST: string;

    constructor(HOST: string) {
        this.HOST = HOST;
    }

    async request<T>(method: string, params: any): Promise<T | null> {
        try {
            const str = Object.keys(params)
                .map(key => `${key}=${params[key]}`)
                .join('&');
            const res = await fetch(`${this.HOST}/?method=${method}&${str}`);
            const answer = await res.json();
            if (answer.result === "ok") {
                return answer.data;
            }

            // обработать ошибку

            return null;
        } catch (e) {
            return null;
        }
    }

    login(login: string, password: string): Promise<TUser | null> {
        return this.request<TUser>("login", { login, password });
    }


}
