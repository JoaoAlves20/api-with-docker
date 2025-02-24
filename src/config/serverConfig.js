export default {
    port: process.env.PORT,
    db: {
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        host: process.env.DB_HOST,
        name: process.env.DB_NAME
    }
}