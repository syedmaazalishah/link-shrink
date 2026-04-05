import express from 'express'
import {linkGet, linkShrink} from '../controllers/controller.link.js'
const LinkRouter = express.Router()
LinkRouter
    .post("/shrink",linkShrink)
    .post("/get" , linkGet)

export default LinkRouter