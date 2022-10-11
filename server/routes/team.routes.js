//routes goes here
import express from "express";

const teamrouter=express.Router()

import {postEvent,getEvent} from "../controllers/team.controller.js"

teamrouter.post('/',postEvent)
teamrouter.get('/',getEvent)


export default teamrouter