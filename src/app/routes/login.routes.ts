import { router } from ".";
import { Login } from "../endpoints";

router.post("/login", Login).get("/login", Login);
