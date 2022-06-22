const mongoose = require('mongoose');

// TODO: PONER EN VARIABLE DE ENTORNO
const db = 'mongodb+srv://aln28UopLkJUUUf:XzoaEOfbIfp8uqpe@teextmecluster0.oxpq3.mongodb.net/teextme?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;