import express from "express";

import { Create , Delete, Index, Update } from "../controller/controler.js";
const router = express.Router();

// r - get    - to see the data
router.get("/", Index);

// c - post   - create the data
router.post("/", Create);

// u - put    - update the data
router.put("/:id", Update);

// d - delete - to delete the data
router.delete("/:id", Delete);

export default router;
