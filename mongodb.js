// import userSchema
const userSchema = require('./userSchema');

// import MongoClient class from the MongoDB driver
const { MongoClient, Collection,ObjectId } = require('mongodb');

// connect URL to MongoDB server
const url = 'mongodb+srv://admin:TqSxMR87@zhixiangyan.xljb7t8.mongodb.net/node-api?retryWrites=true&w=majority';
const client = new MongoClient(url)
//database name
const dbName = 'node-api'
const collectionName = 'task-manager'

async function connectServer(){
  try{
  const db=client.db(dbName)//retrieves a reference to the specified database
  const collection = db.collection(collectionName)//retrieves a reference to the specified collection within the database
  console.log('Successfully connect to database!');




  // db.collection(collectionName).updateOne({_id: new ObjectId("6466b00086779a32fbbd7e0a")},{$inc:{age:19}})
  // .then((result)=>{
  //   console.log('Successfully update the data! ',result)
  // })
  // .catch((error)=>{
  //   console.log();
  // }

    // db.collection(collectionName).insertMany([{description:"clean house",complete:true},{description:"work out",complete:false},{description:"reading book",complete:false}])
    // .then((result)=>{
    //   console.log('Successfully insert datas!',result)
    // })
    // .catch((error)=>{
    //   console.log('Something went wrong!',error)
    // })


    // db.collection(collectionName).updateMany({complete:false},{$set:{complete:true}})
    // .then((result)=>{
    // console.log('Successfully update the data! ',result)
    // })
    // .catch((error)=>{
    // console.log(error)
    // })

    db.collection(collectionName).deleteOne({description:"clean house"})
    .then((result)=>{
    console.log('Successfully update the data! ',result)
    })
    .catch((error)=>{
    console.log(error)
    })












  // async function insertData(){
  // try{
  // const userData =await collection.insertOne({name:"new data",age:22})
  // console.log(userData,' is being add to database!');
  // }catch(error){
  //   console.log('Fail to insert user data!',error)
  // }
  // }

  // async function readData(){
  //   try{
  //   const userData = await collection.find({name:"new data"}).toArray()
  //   console.log(userData,'User data is found!');
  //   }catch(error){
  //     console.log('No user data found! ',error);
  //   }
  // }

  // async function updataData(){
  //   try {
  //     const userData = await collection.updateMany({name:"new data"},{$set:{age: 231}})
  //   } catch (error) {
  //     console.log('Fail to updata data!',error)
  //   }
  // }

  // async function deleteData(){
  //   try {
  //     const userData = await collection.deleteMany({name:"new data"})
  //     if(userData.deletedCount === 0){
  //       return console.log('No data found!')
  //     }
  //     console.log(userData,' is being deleted!');
  //   } catch (error) {
  //     console.log('Fail to delete data!',error)
  //   }
  // }

  //   //insertData()
  //  readData()
  // //  updataData()
  // // deleteData()

  // db.collection('task-manager').insertOne({name:"Kevin",age:21}, (error,users) => {console.log(users)})
  // db.collection('task-manager').findOne({ _id: new ObjectId('6466b00086779a32fbbd7e0a') }, (error, users) => {
  //   if (error) {
  //     console.log('Error:', error);
  //   } else {
  //     console.log(users);
  //   }
  // });
  // db.collection('task-manager').updateOne({name:"Kevin"}, (error,users) => {console.log(users)})
  // db.collection('task-manager').deleteOne({name:"Kevin"}, (error,users) => {console.log(users)})


  }catch(error){
    console.log('Fail to connect to database! ',error)
  }finally{
    client.close()
  }
}

connectServer()

