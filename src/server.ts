import express, { urlencoded } from "express";
import { SERVER } from "./config/environment";
import { CORS, LOG_REQUEST, success } from "./config";
import router from "./app/routes";
import { openConnection } from "./config";

export const app = express();

app.disable("X-Powered-By");
app.use(express.json({ limit: "128mb" }));
app.use(urlencoded({ limit: "128mb", extended: true }));
CORS(app);
LOG_REQUEST(app);
app.use("/api", router);
app.get("*", function (req, res) {
  res.status(404).send("<p>Crime Scene 404. Do not repeat</p>");
});
app.listen(SERVER.port, () => {
  success(`[SERVER] ONLINE: ${SERVER.port}`)
  openConnection();
});
