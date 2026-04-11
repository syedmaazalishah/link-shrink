import express from "express";
import {
	linkGet,
	linkShrink,
	linkCheck,
} from "../controllers/controller.link.js";
const LinkRouter = express.Router();
LinkRouter.post("/shrink", linkShrink)
	.post("/get", linkGet)
	.post("/check", linkCheck);

export default LinkRouter;
