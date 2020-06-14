import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/meetapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export default dbConnection;
