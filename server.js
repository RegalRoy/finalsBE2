const express = require('express')
const port = 3000
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');

app.use(cors());
app.use(express.json())

URI = 'mongodb+srv://cruzroyregal:Today.123@cluster0.5a7kwjj.mongodb.net/DB_NAME'
mongoose.connect(URI, { useNewUrlParser: true,  useUnifiedTopology: true   });
mongoose.connection.once('open', ()=>{console.log('connected to mongoose..')});

const bookRouter = require('./routes/book.route')
app.use('/book', bookRouter)

app.listen(port, ()=>{console.log('express server running...')})