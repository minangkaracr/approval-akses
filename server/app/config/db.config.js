module.exports = {
  HOST: "HOST_SERVER",
  USER: "USER_SERVER",
  PASSWORD: "PW_SERVER",
  DB: "DB_SERVER",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}
