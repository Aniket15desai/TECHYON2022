import express from "express";
import {getSingleParticipant ,
        postSingleParticipant
} from "../controllers/singleParticipant.controller.js"
const singleParticipantRouter =express.Router();

singleParticipantRouter.get("/",getSingleParticipant );
singleParticipantRouter.post("/",postSingleParticipant );
 export default singleParticipantRouter;