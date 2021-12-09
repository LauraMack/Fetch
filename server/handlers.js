"use strict";

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require("uuid");

const { users } = require("./data/users");

const { reviews } = require("./data/reviews");

//get all users in the DB
const getAllUsers = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("final-project");
  const result = await db.collection("users").find().toArray();
  if (result[0]) {
    res.status(200).json({ status: 200, message: "ok", data: result });
  } else {
    res.status(404).json({ status: 404, message: "error", data: result });
  }
  client.close();
};

// get a single user in the DB
const getUserById = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("final-project");
  const _id = req.params._id;
  const result = await db.collection("users").findOne({ _id });
  if (result) {
    res.status(200).json({ status: 200, message: "ok", data: result });
  } else {
    res.status(404).json({ status: 404, message: "error", data: result });
  }

  client.close();
};

// add user to the DB when they sign in or sign up
const addUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("final-project");
  const newId = uuidv4();
  const result = await db.collection("users").insertOne({
    _id: newId,
    email: req.body.email,
  });

  console.log(result);
  result
    ? res.status(200).json({ status: 200, message: "ok", result: req.body })
    : res.status(404).json({ status: 404, message: "error", result: req.body });

  client.close();
};

const updateUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("final-project");
  const _id = req.params._id;
  const result = await db.collection("reservations").updateOne(
    { _id: _id },
    {
      $set: {
        name: req.body.name,
        bio: req.body.bio,
        forte: req.body.forte,
      },
    }
  );

  if (result) {
    res.status(200).json({ status: 200, message: "ok", data: result });
  } else {
    res.status(404).json({ status: 404, message: "error", data: result });
  }
  client.close();
};

module.exports = { getAllUsers, getUserById, addUser, updateUser };
