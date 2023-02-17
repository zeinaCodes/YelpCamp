var mongoose = require('mongoose');    
mongoose.connect('mongodb://localhost:27017/test',
{useNewUrlParser: true,
useUnifiedTopology: true});


var db = mongoose.connection;
db.on("error", function(error){
console.error("Connection error : " + error)
});
db.once('open', function() {
  console.log('Connected to database');
  db.close(function(){
        console.log("db connection closed");
  });
});