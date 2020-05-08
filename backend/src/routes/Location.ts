import { Request, Response, Router } from "express";
import axios from "axios";
import { BAD_REQUEST, CREATED, OK } from "http-status-codes";
import { ParamsDictionary } from "express-serve-static-core";
import { ZOMATO_API_KEY } from "../config";

import { paramMissingError } from "@shared/constants";
const URL = "https://developers.zomato.com/api/v2.1";
const headers = {
  "Content-Type": "application/json",
  "user-key": ZOMATO_API_KEY,
};

// Init shared
const router = Router();

// GET POPULAR RESTAURANTS A/C TO LOCATION - GET /api/location_details
router.get("/location_details", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/location_details`,
      headers,
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err, "Error");
    res.send(err);
  }
});

//GET CITIES A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/locations", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/cities`,
      headers,
      params: {
        query: req.query.query,
        lat: req.query.lat,
        lon: req.query.lon,
        count: req.query.count,
      },
    });

    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err, "Error");
    res.send(err);
  }
});

export default router;
