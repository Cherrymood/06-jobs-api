import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, // Still valid
    useUnifiedTopology: true, // Still valid
    // Removed deprecated options: useCreateIndex and useFindAndModify
  });
};

export default connectDB;
