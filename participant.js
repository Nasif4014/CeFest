var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase');

var Schema = mongoose.Schema;
var participants = new Schema({
    name:String
})
var Trussparticipant = new Schema({
    Event:{type:String,default:'Truss challenge'},
    name:[participants],
    university:{type:String,required:true},
    department:{type:String,required:true},
    mobile:{type:String,required:true},
    transactionID:{type:String,required:true},
    email:{type:String,requied:true},
    adress:{type:String,requied:true},
    file:{imagename:String,data:Buffer}        
    
})
var adminSchema = new Schema({
    name:{type:String,required:true},
    passward:{type:String,requied:true}
    
})
var CADparticipant = new Schema({
    Event:{type:String,default:'CAD CONTEST'},
    name:[participants],
    university:{type:String,required:true},
    department:{type:String,required:true},
    mobile:{type:String,required:true},
    transactionID:{type:String,required:true},
    email:{type:String,requied:true},
    adress:{type:String,requied:true},
        file:{imagename:String,data:Buffer} 
})

var poster_participant = new Schema({
    Event:{type:String,default:'Poster Presentation'},
    name:[participants],
    university:{type:String,required:true},
    department:{type:String,required:true},
    mobile:{type:String,required:true},
    transactionID:{type:String,required:true},
    email:{type:String,requied:true},
    adress:{type:String,requied:true},
        file:{imagename:String,data:Buffer} 
})

const truss = mongoose.model('Trussparticipant',Trussparticipant);
const Cad = mongoose.model('Cadparticipant',CADparticipant);
const poster = mongoose.model('poster',poster_participant);

const admin = mongoose.model('admin',adminSchema)
module.exports = {truss:truss,admin:admin,cad:Cad,poster:poster}


//module.exports = mongoose.model('participant',participantSchema);