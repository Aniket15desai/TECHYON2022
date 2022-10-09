
//routes goes here
import express from "express";
import singleParticipantRouter from "./singleParticipant.routes.js"
 const router= express.Router();
  
router.use("/SingleParticipant", singleParticipantRouter) ;


export default router;
