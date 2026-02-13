const express = require("express");
const { createInventoryController, getInventoryController } = require("../controllers/inventoryController");
const authMiddelware = require("../middlewares/authMiddelware");
const router = express.Router();

//routes
//ADD INVENTORY || POST
router.post("/create-inventory",authMiddelware, createInventoryController);


//GET ALL BLOOD RECORDS

router.get('/get-inventory',authMiddelware,getInventoryController)


module.exports = router