import { Router } from "express";
// import UserRouter from "./Users";
import ZomatoRouter from "./Zomato";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/", ZomatoRouter);

// Export the base-router
export default router;
