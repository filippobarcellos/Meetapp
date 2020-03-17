import mongoose from 'mongoose';

const connection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://filippo:18081990@cluster0-ukzai.mongodb.net/meetapp?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
  } catch (err) {
    process.exit(1);
  }
};

export default connection;
