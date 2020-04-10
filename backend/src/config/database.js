import mongoose from 'mongoose';

const dbConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://fbarcellos:18081990@cluster0-ukzai.mongodb.net/meetapp?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (error) {
    console.error(error.message);
  }
};

export default dbConnection;
