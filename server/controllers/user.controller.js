const user = require("../models/user.model");
const foods = require("../models/foods.model");
const signinUser = async (req, res) => {
    const { email, password } = req.body;
    const data = {
        email: email,
        password: password
    }
    try {
        const check = await user.findOne({ email: email })
        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
        }
    }
    catch (err) {
        res.json("fail");
    }
}
const signupUser = async (req, res) => {
    const { email, password } = req.body;
    const data = {
        email: email,
        password: password
    }
    try {
        const check = await user.findOne({ email: email })
        if (check) {
            res.json("exist")
        }
        else {
            res.json("notexist")
            await user.insertMany([data]);
        }
    }
    catch (err) {
        res.json("fail");
    }
}
const getAllusers=async(req,res)=>{
    try{
        const users=await user.find();
        if(users){
            res.json(users);
        }
        else{
            res.json("No users");
        }
    }
    catch(err){

    }
}
const addFoods = async (req, res) => {
    const { id1, name1, price1, image1, description1, tag1 } = req.body;
    const data = {
        id: id1,
        name: name1,
        price: price1,
        image: image1,
        description: description1,
        tag: tag1
    }
    try {
        const check = await foods.findOne({ id: id1 });
        if (check) {
            res.json("exist");
        }
        else {
            res.json("notexist");
            await foods.insertMany([data]);
        }
    }
    catch (err) {
        res.json("fail");
    }

}
const updateFoods = async (req, res) => {
    const id = req.query.id;
    const updatefood = req.body;
    try {
        const updatedFood = await foods.findOneAndUpdate({ id: id }, updatefood, { new: true });
        if (updatedFood) {
            res.json(updatedFood);
        }
        else {
            res.json("Error");
        }
    }
    catch (err) {
        res.json(err);
    }
}
const deleteFoods = async(req,res) => {
    const id = req.query.id;
    try {
        const deletedFood = await foods.findOneAndDelete(id);
        if (deletedFood) {
            res.json(deletedFood.value);
        }
        else {
            res.json("Error");
        }
    }
    catch (err) {
        res.json(err);
    }
}
const getFoods = async (req, res) => {
    const id = req.query.id;
    try {
        const foundFood = await foods.findOne({ id: id });

        if (foundFood) {
            res.json(foundFood);
        }
        else {
            res.json("notexist");
        }
    }
    catch (err) {
        res.json("error")
    }

}
module.exports = { signinUser, signupUser, addFoods, deleteFoods, getFoods, updateFoods,getAllusers }