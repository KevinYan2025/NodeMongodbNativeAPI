//create a user schema

const userSchema = {
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true
    }
}

module.exports=userSchema