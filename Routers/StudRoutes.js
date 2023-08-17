import express from "express"
import {getAllStudents, getAllStudentsById } from "../Controllers/StudControl.js"
import { addStudent } from "../Controllers/StudControl.js";
const router=express.Router();

router.get ('/all',async(req,res)=>{
    try {
        const students=await getAllStudents(req);
        if(!students){
           return res.status.apply(400).json({data:"user not found"})
        }
        res.status(200).json({data:students})
    } catch (error) {
        res.status(500).json({data:"Internal server error"})
    }
})
router.get('/:id',async(req,res)=>{
    try {
        const {id}=req.params;
        const students=await getAllStudentsById(id);
        if(!students){
            res.status(400).json({data:"User not found"})
            return
        }
        res.status(200).json({data:students})
    } catch (error) {
        res.status(500).json({data:"Internal server error"})
    }
})

router.post('/add',async(req,res)=>{
    try {
        const newStudent=req.body;
        if(!newStudent){
          return res.status(400).json({data:"No details provided"})
        }  
        const result = await addStudent(newStudent)
res.status(200).json({data:{result:result, message:"New student added successfully"}})
    } catch (error) {
        console.log(error);
        res.status(500).json({data:"Internal server error"})
    }
})

export const studentsRouter=router;