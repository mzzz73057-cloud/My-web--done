const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const mongoUri =
      process.env.MONGODB_URI ||
      'mongodb://localhost:27017/pfe_english';

    await mongoose.connect(mongoUri);

    console.log(`MongoDB connected (${mongoose.connection.host})`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDb;