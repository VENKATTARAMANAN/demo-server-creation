import { MongoClient} from "mongodb";
import Obj from "mongodb"

const MongoURL="mongodb+srv://venkat:venkat457@cluster0.gi4hbxg.mongodb.net/?retryWrites=true&w=majority"

async function createConnection(){
    const client =new MongoClient(MongoURL)
    await client.connect()
    console.log("Mongodb connected successfully");
    return client
}

export var ObjectID= Obj.ObjectId;
export const client=await createConnection();


// import { MongoClient } from "mongodb";

// const MongoURL="mongodb://127.0.0.1:27017"

// async function createConnection(){
//  const client=new MongoClient(MongoURL);
//  await client.connect()
//  console.log("Mongodb connected sucessfully");
//  return client;
// }

// export const client=await createConnection();
