import { ObjectID, client } from "../db.js";

export function getAllStudents(req){
    return client
    .db("guvi")
    .collection("students")
    .find()
    .toArray()
}

export function getAllStudentsById(id){
    return client
    .db("guvi")
    .collection("students")
    .findOne({_id:new ObjectID(id)})    
}

export function addStudent(data){
    return client 
    .db("guvi")
    .collection("students")
    .insertOne(data)
}

