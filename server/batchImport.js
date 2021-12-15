const { users } = require("./data/users");
const { reviews } = require("./data/reviews");
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db("final-project");

  await db.collection("users").insertMany(users);

  client.close();
};

batchImport();
