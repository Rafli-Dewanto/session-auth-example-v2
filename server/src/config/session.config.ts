const oneMinute = 60 * 1000;

interface Cookie {
    maxAge: number;
    secure: boolean;
}

interface Config {
    name: string;
    secret: string;
    saveUninitialized: boolean;
    resave: boolean;
    cookie: Cookie;
}

const config: Config = {
    name: "sid",
    secret: process.env.SESSION_SECRET_KEY as string,
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: oneMinute,
        secure: false, // set to true in production
    },
};

export default config;
