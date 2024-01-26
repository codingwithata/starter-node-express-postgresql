const path = require("path");

require("dotenv").config();
const { DATABASE_URL } = process.env;

const config = {
  client: "postgresql",
  connection:
    "postgres://myfakedatabase:8t6FiWqSDF8GsR--7mrun245I9TofnWd@fakepostgres.db.elephantsql.com:5432/myfakedatabase",
  migrations: {
    directory: path.join(__dirname, "src", "db", "migrations"),
  },
};

const knex = require("knex")(config);
