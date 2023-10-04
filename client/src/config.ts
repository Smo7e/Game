// UdSU
const DOMAIN = 'http://studfront';
const PORT = 81;

// dev
//const DOMAIN = 'http://studfront';
//const PORT = 0;

// prod
//...

export const HOST = PORT ? `${DOMAIN}:${PORT}` : `${DOMAIN}`;