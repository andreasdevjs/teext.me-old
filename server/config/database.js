const mongoose = require('mongoose');

// TODO: PONER EN VARIABLE DE ENTORNO
const db = 'mongodb+srv://teextmeadminuser:837sbhH7A7S7S7SYyaggazz4@teextmeproductioncluste.dqzlaxp.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
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