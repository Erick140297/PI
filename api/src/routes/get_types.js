const { Router } = require("express");
const getTypes = require("../controllers/getTypes");

const router = Router();

// GET /types:

router.get("/types", async (req, res) => {
  try {
    const response = await getTypes()
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router