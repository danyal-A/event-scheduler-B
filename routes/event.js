const { Router } = require("express");
const { get } = require("../controllers/event");
const asyncHandler = require("express-async-handler");

const router = Router();

router.get("/", asyncHandler(get));

module.exports = router;
