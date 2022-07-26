const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_PRODUCTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Teextme MongoDB Connected...');
    
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;