import mongoose from "mongoose";
import { err, success } from "../";
import { MONGO } from "../environment";

export const openConnection = async () => {
  try {
    await mongoose.connect(MONGO.URI || "", {
      dbName: "mydb",
      autoIndex: false, // Don't build indexes
      maxPoolSize: 1, // Maintain up to 10 socket connections
      family: 4, // Use IPv4, skip trying IPv6
    });
    success("[DATABASE] ONLINE");
  } catch (error) {
    err("There was an error while trying to connect database", error);
  }
};
