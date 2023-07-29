const express=require("express");
const { signinUser, signupUser, addFoods, deleteFoods, getFoods, updateFoods, getAllusers } = require("../controllers/user.controller");
const routes=express.Router();

routes.post("/login",signinUser);
routes.post("/signup",signupUser);

routes.get("/users",getAllusers);

routes.get("/controlFoods",getFoods);
routes.put("/controlFoods",updateFoods);
routes.post("/controlFoods",addFoods);
routes.delete("/controlFoods",deleteFoods);
module.exports=routes;    