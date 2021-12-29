"use strict";
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  getExistingUser,
  addReview,
  addAd,
  getUserAdsByUserId,
  getCurrentUserAdsById,
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
  .get("/users/ads/:_id", getUserAdsByUserId)
  .get("/my-ads/:_id", getCurrentUserAdsById)
  .post("/users/:email", getExistingUser)
  .post("/users", addNewUser)
  .post("/all-ads", addAd)
  .post("/profile/:_id", addReview)
  .patch("/users/:_id", updateUser)

  // endpoints are added above

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
