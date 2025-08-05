const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  creatorID: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User document
    required: true,
    ref: 'User'
  },
  creatorName: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: true
  },
  accepterID: {
    type: mongoose.Schema.Types.ObjectId, // Nullable reference to User document
    ref: 'User',
    default: null
  },
  accepterName: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['open', 'accepted', 'in-progress', 'completed', 'cancelled'],
    default: 'open'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  location: {
    city: {
      type: String
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere' // Enables GeoSpatial queries
    }
  },
  category: {
    type: String,
    default: 'moving'
  },
  deadline: {
    type: Date,
    default: null
  },
  ratingGiven: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String,
    default: ''
  }
})

module.exports = mongoose.model('Task', TaskSchema);
