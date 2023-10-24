import mongoose, { mongo } from 'mongoose';

async function conectDb() {
  mongoose.connect(process.env.DB_CONNECTION_STRING);
  return mongoose.connection;
}

export default conectDb;
