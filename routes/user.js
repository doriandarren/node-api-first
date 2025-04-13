import { Router } from "express";
import { userDelete, userGet, userPatch, userPost, userPut } from "../controllers/user.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";
import { isEmailExist, isValidRole } from "../helpers/db-validators.js";



const router = Router();


// http://localhost:8080/api/usuarios
router.get('/', userGet);

// http://localhost:8080/api/usuarios/10
router.put('/:id', userPut);


router.post('/', [
    check('name', 'El name no es válido').not().isEmpty(),
    check('password', 'El password no es válido y más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( isEmailExist ),
    //check('role', 'El rol no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    validateFields
], userPost);


router.delete('/', userDelete);


router.patch('/api', userPatch);


export default router;