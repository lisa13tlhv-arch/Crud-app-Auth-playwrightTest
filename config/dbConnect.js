import mongoose from 'mongoose';

const portDB = '27017';
const hostDB = 'localhost';
const dbName = 'crud-auth-appDB';
const urlDB = `mongodb://${hostDB}:${portDB}/${dbName}`;

const connectDB = async () => {
  try {
    await mongoose.connect(urlDB);
    console.log(`MongoDB connected: ${hostDB}:${portDB}/${dbName}`);
  } catch (error) {
    console.log(`MongoDB Error: ${error.message || error}`);
    process.exit(1);
  }
};

export default connectDB;