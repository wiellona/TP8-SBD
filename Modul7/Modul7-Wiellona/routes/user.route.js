const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/addMahasiswa", userController.addUser);
router.get("/getAllMahasiswa", userController.getAllUsers);
router.put("/updateMahasiswa/:id", userController.updateUser);
router.delete("/deleteMahasiswa/:id", userController.deleteUser);

module.exports = router;
