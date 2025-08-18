express = require('express');
const path = require('path');
const app = express();
const tasks = require('./routes/tasks')
const users = require('./routes/users')
const database = require('./db/connect')
require('dotenv').config()

app.use('/worker', express.static(path.join(__dirname, '../frontend/worker-side')));
app.use('/poster', express.static(path.join(__dirname, '../frontend/poster-side')));
app.use('/starter', express.static(path.join(__dirname, '../frontend/starter-page')));


app.use(express.static('./frontend/'))

app.use(express.json())

app.use('/api/v1/tasks', tasks)

app.use('/api/v1/users', users)



const port = process.env.PORT || 3000

const start = async ()=>{
  try {
    await database(process.env.MONGO_URI)
    app.listen(port, console.log(`server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start();