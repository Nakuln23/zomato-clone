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
router.get("/categories", async (req: Request, res: Response) => {
  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/categories`,
      headers,
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err, "Error");
    res.send(err);
  }
});

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
router.get("/cities", async (req: Request, res: Response) => {
  console.log(req.params, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/cities`,
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
router.get("/collections", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/collections`,
      headers,
      params: {
        city_id: req.query.city_id,
        lat: req.query.lat,
        lon: req.query.lon,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

//GET collections A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/cuisines", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/cuisines`,
      headers,
      params: {
        city_id: req.query.city_id,
        lat: req.query.lat,
        lon: req.query.lon,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

//GET collections A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/establishments", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/establishments`,
      headers,
      params: {
        city_id: req.query.city_id,
        lat: req.query.lat,
        lon: req.query.lon,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

//GET Geocode A/C TO QUERY NAME AND LAT,LONG - GET /api/cities
router.get("/geocode", async (req: Request, res: Response) => {
  console.log({ params: req.params }, req.query, "api hitt");

  try {
    const response = await axios({
      method: "GET",
      url: `${URL}/geocode`,
      headers,
      params: {
        lat: req.query.lat,
        lon: req.query.lon,
      },
    });
    return res.status(OK).json(response.data);
  } catch (err) {
    console.error(err.config.url, "Error");
    res.send(err);
  }
});

export default router;
