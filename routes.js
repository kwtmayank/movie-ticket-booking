import express from "express";
import ReferenceController from "./controller/referenceController.js";

const router = express.Router();
const referenceController = new ReferenceController();

router.route("/reference").get(referenceController.getLanguages);

export default router;
