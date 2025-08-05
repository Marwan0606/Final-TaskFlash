const getUserID = (req, res, next) => {
  req.user = {
    userID: '64d9aebafacb5c1a947e4567',  // Replace with a real ObjectId from your User collection
    username: 'Marwan'                   // Optional: attach username if needed
  };
  next();
};

module.exports = getUserID;
