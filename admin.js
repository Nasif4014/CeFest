var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;

var adminSchema = new Schema({
    name:{type:String,required:true},
    passward:{type:String,requied:true}
    
})
module.exports = mongoose.model('admin',adminSchema)

