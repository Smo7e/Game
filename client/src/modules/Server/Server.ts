import { Mediator } from "..";
import { TUser, TUserFull, TError, TMessages, TMessage } from "./types";

export default class Server {
    private HOST: string;
    private token: string | null = null;
    private mediator: Mediator;

    private chatHash: string = "123";
    private chatInterval: ReturnType<typeof setInterval> | null = null;

    constructor(HOST: string, mediator: Mediator) {
        this.HOST = HOST;
        this.mediator = mediator;
    }

    async request<T>(method: string, params: any = {}): Promise<T | null> {
        try {
            if (this.token) {
                params.token = this.token;
            }
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

    startChatInterval() {
        this.chatInterval = setInterval(async () => {
            const messages = await this.getMessages();
            if (messages?.length) {
                const { GET_MESSAGES } = this.mediator.getEventTypes();
                this.mediator.call<Array<TMessage>>(GET_MESSAGES, messages);
            }
        }, 150);
    }

    stopChatInterval() {
        if (this.chatInterval) {
            clearInterval(this.chatInterval);
            this.chatInterval = null;
        }
    }

    async login(login: string, hash: string, rnd: number): Promise<TUser | null> {
        const answer = await this.request<TUserFull>("login", { login, hash, rnd });
        if (answer) {
            this.token = answer.token;
            return {
                id: answer.id,
                name: answer.name,
            };
        }
        return answer;
    }

    async logout() {
        const answer = await this.request<boolean>("logout");
        this.token = null;
        return answer;
    }

    signUp(login: string, password: string, nickname: string): Promise<TUser | null> {
        return this.request<TUser>("signUp", { login, password, nickname });
    }
    sendMessage(message: string) {
        return this.request("sendMessage", { token: this.token, message });
    }

    async getMessages(): Promise<Array<TMessage> | null> {
        const answer = await this.request<TMessages>("getMessages", { hash: this.chatHash });
        if (answer && answer.hash) {
            this.chatHash = answer.hash;
            return answer.messages;
        }
        return answer as null;
    }
}
