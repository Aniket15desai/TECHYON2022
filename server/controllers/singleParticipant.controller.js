
import {Photography, RoboWars} from "../models/singleParticipant.js";


export const getSingleParticipant= async(req,res)=>{
  const eventName=req.body.eventName;
  try{
    switch (eventName)
    {
        case "Photography":
        {
            console.log(req.body)
            const data = await Photography.find()
            res.status(200).send(data)
            break;

        }
         case "RoboWars":
        {
            console.log(req.body)
            const data = await RoboWars.find()
            res.status(200).send(data)
            break;

        }
    }
  
}catch(err)
{
    res.status(422).send(err)
}


};

export const postSingleParticipant= async(req,res)=>{
    const eventName=req.body.eventName;
    console.log(eventName)
    try{
      switch (eventName)
      {
          case 'Photography':
          {
              const data = await Photography.create(req.body)
              await data.sendmail()
              res.status(200).send(data)
              break;
      
          }
          case 'RoboWars':
          {
              const data = await RoboWars.create(req.body)
              await data.sendmail()
              console.log(data._id.toString())
              res.status(200).send(data)
              break;
      
          }
      }
    
  }catch(err)
  {
      res.status(422).send(err)
  }
  
  
  };
  