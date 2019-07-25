var express=require('express');
var app=express();
var multer = require('multer');
var path = require('path');


var {truss} = require('./participant.js');
var {admin} = require('./participant.js')
var {cad} = require('./participant.js');
var {poster}=require('./participant.js')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');


console.log("hey there");
var defaultAdmin=new admin();
defaultAdmin.name="Nasif";
defaultAdmin.passward="2016110754014";
defaultAdmin.save((err)=>{
 if(err){
        res.type('html').status(500);
        res.send('Err:'+err);
    }
    else{
 console.log(defaultAdmin);
    }

})
app.use('/',express.static('public'));
app.use('/public',express.static('public'));

app.use(express.static('./views'));



    

app.use('/showTruss', (req,res)=>{
    truss.find((err,allPeople)=>{
        if(err){
            res.type('html').status('500');
            res.send('Error:'+err);
        }
        else if (allPeople.length==0){
            res.type('html').status('500');
            res.send('There are no people');
        }
        else {
            res.render('ShowAll',{people:allPeople})
        }
    })
})

    
app.use('/showCad', (req,res)=>{
    cad.find((err,allPeople)=>{
        if(err){
            res.type('html').status('500');
            res.send('Error:'+err);
        }
        else if (allPeople.length==0){
            res.type('html').status('500');
            res.send('There are no people');
        }
        else {
            res.render('ShowAll',{people:allPeople})
        }
    })
})
app.use('/showPoster', (req,res)=>{
    poster.find((err,allPeople)=>{
        if(err){
            res.type('html').status('500');
            res.send('Error:'+err);
        }
        else if (allPeople.length==0){
            res.type('html').status('500');
            res.send('There are no people');
        }
        else {
            res.render('ShowAll',{people:allPeople})
        }
    })
})


app.use('/login',(req,res)=>{
    var name=req.body.name;
    var passward=req.body.passward;

    admin.findOne({name:name,passward:passward},(err,admin)=>{
        console.log(admin);
        console.log(defaultAdmin);
        if(admin.passward==defaultAdmin.passward){
            console.log("okok")
            res.sendFile(__dirname +'/public/show.html')
        }
        
    })
    
})

app.use('/change',(req,res)=>{
    
    
    defaultAdmin.name=req.body.name;
    defaultAdmin.passward=req.body.passward;
    defaultAdmin.save((err)=>{
          if(err){
            res.type('html').status('500');
            res.send('Error:'+err);
        }
        else {
            res.send("changed admin")
        }
    })
    console.log("are!!");
    console.log(defaultAdmin)

})

var storage = multer.diskStorage({
        destination:'./views',
        filename:(req,file,cb)=>{
           // console.log(req.body);
            console.log(file);
            cb(null,req.body.transactionID+path.extname(file.originalname));
        }
    })
    var upload = multer({
        storage:storage
    }).single('file');



app.use('/submitTruss',upload,(req,res)=>{
 console.log(req.body);
    console.log("///////")
       console.log(req.file);
   console.log(req.file.fieldname);
      
     // console.log("HEYY");
    
var sucess = req.file.fiename +'uploaded';
console.log(sucess); 
   
var newParticipant = new truss(req.body);
console.log(newParticipant) ;   
    req.file.filename= newParticipant.transactionID;
    console.log(req.file.filename)
newParticipant.save((err)=>{
    if(err){
        res.type('html').status(500);
        res.send('Err:'+err);
    }
    else {
        res.type('html').status(200);
        res.write('ok')
    }
})
  
    
    
});



app.use('/submitCad',upload,(req,res)=>{
 console.log(req.body);
    console.log("///////")
       console.log(req.file);
   console.log(req.file.fieldname);
      
     // console.log("HEYY");
    
var sucess = req.file.fiename +'uploaded';
console.log(sucess); 
   
var newParticipant = new cad(req.body);
console.log(newParticipant) ;   
    req.file.filename= newParticipant.transactionID;
    console.log(req.file.filename)
newParticipant.save((err)=>{
    if(err){
        res.type('html').status(500);
        res.send('Err:'+err);
    }
    else {
        res.type('html').status(200);
        res.write('ok')
    }
})
  
    
    
});





     

app.use('/submitPoster',upload,(req,res)=>{

    
   console.log(req.file.fieldname);
      console.log(req.file);
     // console.log("HEYY");
    
var sucess = req.file.fiename +'uploaded';
console.log(sucess); 
   
var newParticipant = new poster(req.body);
console.log(newParticipant) ;   
    req.file.filename= newParticipant.transactionID;
    console.log(req.file.filename)
newParticipant.save((err)=>{
    if(err){
        res.type('html').status(500);
        res.send('Err:'+err);
    }
    else {
        res.type('html').status(200);
        res.write('ok')
    }
})
  
    
    
});









const port = process.env.PORT || 3000 ;

app.listen(port,()=>{
    console.log('listening good on port 3000,copy')
})
