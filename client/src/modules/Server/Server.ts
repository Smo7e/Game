import { Mediator } from "..";
import { TUser, TError } from "./types";

export default class Server {
    private HOST: string;
    private mediator: Mediator;

    constructor(HOST: string, mediator: Mediator) {
        this.HOST = HOST;
        this.mediator = mediator;
    }

    async request<T>(method: string, params: any): Promise<T | null> {
        try {
            const str = Object.keys(params)
                .map((key) => `${key}=${params[key]}`)
                .join("&");
            const res = await fetch(`${this.HOST}/?method=${method}&${str}`);
            const answer = await res.json();
            if (answer.result === "ok") {
                return answer.data;
            }
            const { SERVER_ERROR } = this.mediator.getEventTypes();
            this.mediator.call<TError>(SERVER_ERROR, answer.error);
            return null;
        } catch (e) {
            return null;
        }
    }

    login(login: string, password: string): Promise<TUser | null> {
        return this.request<TUser>("login", { login, password });
    }

    getPerson(personName: string, personId: number, imageId: number): Promise<TUser | null> {
        return this.request<TUser>("getPerson", { personName, personId, imageId });
    }
}
