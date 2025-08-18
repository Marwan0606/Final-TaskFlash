const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({ //this sets the specific type of data each document has within the collection
  email: {
    type:String,
    required:[true, 'must provide name'], //these are validators that control what the user can input
    trim:true, //removes extra spaces
  },
  password: {
    type:String,
    required:[true, 'must provide rating']
  },
  name: {
    type:String,
    required:[true, 'must provide name']
  },
  role: {
    type:String,
    required:[true, 'role required are you a worker or a poster']
  },
  rating: {
    type:mongoose.Schema.Types.Decimal128,
    default: 0.00
  },
  amountRatings: {
    type:mongoose.Schema.Types.Decimal128,
    default: 0
  },
  tasksCompleted: {
    type:mongoose.Schema.Types.Decimal128,
    default: 0
  },
  tasksInProgress: {
    type:mongoose.Schema.Types.Decimal128,
    default: 0
  },
  tasksPendingReview: {
    type:mongoose.Schema.Types.Decimal128,
    default: 0
  }
})

module.exports = mongoose.model('User', UserSchema);