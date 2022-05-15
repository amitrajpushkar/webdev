const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amit:happy@cluster0.wrjrl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', { name: String });

//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));

Cat.find().then(function(responses){
    console.log(responses);
})