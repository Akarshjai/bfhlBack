const express = require("express");
const { handlePostRequest, handleGetRequest } = require("./controllers");
const router = express.Router();

router.post("/bfhl", handlePostRequest);
router.get("/bfhl", handleGetRequest);

module.exports = router;
