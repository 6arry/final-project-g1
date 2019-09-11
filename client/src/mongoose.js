var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var djSchema = new mongoose.Schema({
    name: String
  });

var DJ = mongoose.model('DJ', djSchema);

var addyG = new DJ({ name: 'addyG' });
console.log(addyG.name); // 'addyG'