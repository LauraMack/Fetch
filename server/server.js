"use strict";
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  getExistingUser,
  addReview,
  addFavourite,
  deleteFavourite,
  sendMessageToUser,
  getInbox,
} = require("./handlers");

// import the needed node_modules.
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

express()
  // log more info to the console.
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // endpoints are added below
  .get("/users", getAllUsers)
  .get("/profile/:_id", getUserById)
  .get("/contact/:_id", getUserById)
  .get("/users/inbox/:_id", getInbox)
  .post("/users/:email", getExistingUser)
  .post("/users", addNewUser)
  .post("/profile/:_id", addReview)
  .post("/contact/:_id", sendMessageToUser)
  .patch("/users/:_id", updateUser)
  .patch("/users/:_id/favourite", addFavourite)
  .patch("/users/:_id/remove-favourite", deleteFavourite)

  // endpoints are added above

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
