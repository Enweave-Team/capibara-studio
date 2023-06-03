type Config = {
    serverPort: number;
    dbUrl: string;
    secretKey: string;
    expireTime: number
}

const customEnv : Config = {
    "serverPort": 5000,
    "dbUrl" : "mongodb+srv://starokozhkoslavik:aX2yCW1xksNUNHTg@capybarastudio.1itsrwm.mongodb.net/?retryWrites=true&w=majority",
    "secretKey" : "secret-key",
    "expireTime" : 86400
}

export default customEnv;
