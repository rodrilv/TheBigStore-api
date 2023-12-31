import { config } from "dotenv";

config();

export const ENVIRONMENT = process.env.ENVIRONMENT;

export * from './server.environment';
export * from './mongo.environment';