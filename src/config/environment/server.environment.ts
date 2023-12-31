export const SERVER = {
  port: process.env.PORT,
  secret: process.env.SECRET,
  master: process.env.MASTER_SECRET,
  user: JSON.parse(process.env.MASTER || ""),
};
