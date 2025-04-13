import { Router } from "express";
import { check } from "express-validator";
import { loginController } from "../controllers/auth/loginController.js";
import { validateFields } from "../middlewares/validate-fields.js";



const router = Router();


router.post('/login', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validateFields
], loginController);




export default router;