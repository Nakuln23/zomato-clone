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

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

// router.put("/update", async (req: Request, res: Response) => {
//   const { user } = req.body;
//   if (!user) {
//     return res.status(BAD_REQUEST).json({
//       error: paramMissingError,
//     });
//   }
//   user.id = Number(user.id);
//   await userDao.update(user);
//   return res.status(OK).end();
// });

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete("/delete/:id", async (req: Request, res: Response) => {
//   const { id } = req.params as ParamsDictionary;
//   await userDao.delete(Number(id));
//   return res.status(OK).end();
// });

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
