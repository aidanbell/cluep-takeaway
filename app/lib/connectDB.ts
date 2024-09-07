import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectDB() {
  if (cachedConnection) {
    console.log("Using cached mongoDB connection to: " + cachedConnection.name);
    return cachedConnection;
  }

  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI as string);
    cachedConnection = connection;
    console.log("Successfully Connected to mongoDB instance: " + connection.name);
    return cachedConnection;
  } catch (error) {
    throw new Error("Error connecting to database: " + error);
  }
}