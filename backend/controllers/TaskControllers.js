const TaskModel =require ("../models/TaskModels")

module.exports.getTasks =async (req,res) =>{
   const tasks =await TaskModel.find();
   res.send(tasks);
};

module.exports.saveTask = (req,res) =>{
    
    const{task}= req.body

    TaskModel.create({task})
    .then((data) => {
        console.log("Saved Successfully ...")
        res.status(201).send(data)   
    }).catch((err) =>{
        console.log();
        res.send({error:err, msg:"Something Went Wrong!"})
    })
 };

 module.exports.updateTask = (req,res) =>{
    const {id} =req.params
    const{task}= req.body

    TaskModel.findByIdAndUpdate(id,{task})
    .then(() => res.send("Updated Successfully"))
   .catch((err) =>{
        console.log();
        res.send({error:err, msg:"Something Went Wrong!"})
    })
 };

 module.exports.deleteTask = (req,res) =>{
    const {id} =req.params
   

    TaskModel.findByIdAndDelete(id,{task})
    .then(() => res.send("Delete Successfully"))
   .catch((err) =>{
        console.log();
        res.send({error:err, msg:"Something Went Wrong!"})
    })
 };