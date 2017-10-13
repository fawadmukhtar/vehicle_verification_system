// importing module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const config = require('./config/database');

const app = express();


// connection to mongodb
mongoose.connect(config.database, {
	useMongoClient: true
});

mongoose.connection.on('connected', ()=> {
	console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err) => {
	if(err){
		console.log(err);
	}
});

const route = require('./routes/route');
// its for authentication only
const users  = require('./routes/users');

// bodyparser
app.use(bodyParser.json());

// middleware
app.use(cors());

// * means allow all headers but it should be before routers decleared
app.options('*', cors());

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);


// routes
app.use('/api', route);
app.use('/api', users);

//homepage route
app.get('/', (req,res)=> {
	res.send('Invalid Input');
});

app.get('*', (req, res) => {
  	res.sendFile(path.join(__dirname, 'public/index.html'));
});


// port no
const port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log('Server is started on port '+port);
});

