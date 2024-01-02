export type TError = {
    code: number;
    text: string;
};

export type TUserFull = {
    id: number;
    name: string;
    token: string;
};

export type TUser = {
    id: number;
    name: string;
};

export type TMessage = {
    message: string;
    name: string;
};

export type TMessages = {
    messages: Array<TMessage>;
    hash: string;
};

export type TGamer = {
    name: string;
    person_id: number;
    status: string;
    x: number;
    y: number;
    direction: string;
};

export type TScene = {
    gamers: Array<TGamer> | null;
    items: null;
    mobs: null;
    map: null;
    hashGamers?: string;
};
