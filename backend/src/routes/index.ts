import { Router } from "express";

import CommonRouter from "./Common";
import RestaurantRouter from "./Restaurant";
import LocationRouter from "./Location";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/", CommonRouter);
router.use("/", RestaurantRouter);
router.use("/", LocationRouter);

// Export the base-router
export default router;
