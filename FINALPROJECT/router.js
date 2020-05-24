const express = require("express");
const router = express.Router();
const productRouter = require("./productData");

//create
router.post("/", async(req, res) => {
    
    var data = new routerInfo({
        Name : req.body.Name,
        Price : req.body.Price,
        Discount : req.body.Discount
    });

    await data.save();

    res.json(data);
})

//getAll
router.get("/", async(req,res) => {
    var findData = await routerInfo.find();
    res.json(findData);
})

//update
router.put("/update", async(req,res) => {
    var update = await routerInfo.update({id:req.body._id} , {$set:{
        Name:req.body.Name,
        Price : req.body.Price,
        Discount: req.body.Discount
    }});

    res.json(update);
})

//delete
router.delete("del/:id", async(req,res) => {
    var delData = await routerInfo.findByIdAndRemove(req.params.id).then(e => {
        res.json({message:"Deleted successfully"});
    })
})

router.get("/", (req, res) => {
    res.json("I am from router file");
})

module.exports = router;