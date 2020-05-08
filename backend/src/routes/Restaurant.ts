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

// GET CATEGORIES - GET /api/categories
router.get("/dailymenu", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/dailymenu`,
      headers,
      params: {
        q: req.query.q,
        res_id: req.query.res_id,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err, "Error");
    res.send(err);
  }
});

//GET CITIES A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/restaurant", async (req: Request, res: Response) => {
  console.log(req.params, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/restaurant`,
      headers,
      params: {
        q: req.query.q,
        lat: req.query.lat,
        lon: req.query.lon,
        city_id: req.query.city_id,
        count: req.query.count,
      },
    });
    console.log(response.config);
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err, "Error");
    res.send(err);
  }
});

//GET collections A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/reviews", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/reviews`,
      headers,
      params: {
        res_id: req.query.res_id,
        start: req.query.start,
        count: req.query.count,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

//GET collections A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/search", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/search`,
      headers,
      params: {
        entity_id: req.query.entity_id,
        entity_type: req.query.entity_type,
        q: req.query.q,
        start: req.query.start,
        count: req.query.count,
        lat: req.query.lat,
        lon: req.query.lon,
        radius: req.query.radius,
        cuisines: req.query.cuisines,
        establishment_type: req.query.establishment_type,
        collection_id: req.query.collection_id,
        category: req.query.category,
        sort: req.query.sort,
        order: req.query.order,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

export default router;
