const mongoose = require('mongoose')

const database = (url)=>{ //THIS FUNCITON RETURNS A PROMISE
  return mongoose.connect(url)
}

module.exports = database