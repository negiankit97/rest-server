const mongoose = require('mongoose');
const restify = require('restify');
const config = require('./config');
const rjwt = require('restify-jwt-community')

const server = restify.createServer();

//Middleware
server.use(restify.plugins.bodyParser());

//Protect routes
//server.use(rjwt({ secret : config.JWT }).unless({ path: ['/path'] }));

server.listen(config.PORT, () => {
    mongoose.set('useFindAndModify', false);
    mongoose.connect(
        config.MONGODB_URI,
        {useNewUrlParser: true}
    ).then(()=>console.log('MongoDB is connected'))
    .catch((err)=> console.log(err));
});

const db = mongoose.connection;

db.on('error', err => console.log(err))

db.once('open', () => {
    require('./routes/customers')(server);
    require('./routes/users')(server);
    console.log(`Server started on port ${config.PORT}`);
});