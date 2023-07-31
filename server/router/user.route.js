const express = require("express");
const { signinUser, signupUser, addFoods, deleteFoods, getFoods, updateFoods, getAllusers, deleteUser, showAllfoods } = require("../controllers/user.controller");
const routes = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/Images/ForAllFood/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: storage });
routes.post("/login", signinUser);
routes.post("/signup", signupUser);

routes.get("/users", getAllusers);
routes.delete("/users", deleteUser);

routes.get("/foods", showAllfoods) 

routes.get("/controlFoods", getFoods);
routes.put("/controlFoods", updateFoods);
routes.post("/controlFoods", upload.single('image1'), addFoods);
routes.delete("/controlFoods", deleteFoods);
module.exports = routes;     