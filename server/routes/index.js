import  express  from "express";
import teamrouter from "./team.routes.js";

const router=express.Router();

router.use('/teamEvent',teamrouter)


export default router