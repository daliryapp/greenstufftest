interface IConfig {
    BASE_URL: string;
}

const config: IConfig = {
    BASE_URL: process.env.REACT_APP_BASE_URL || '',
}
const {
    BASE_URL,
} = config;
export {
    BASE_URL

};