module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "pospass",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
