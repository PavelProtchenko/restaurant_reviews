import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurant.js";

const router = Router();

router.post("/", validate(RestaurantSchema), async (req, res) => {
    const data = req.body as Restaurant;
    await res.send("Hello World");
});

export default router;
