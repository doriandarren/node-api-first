import { Router } from "express";
import { userPatch } from "../controllers/users/user.controller.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

import { userStoreController } from "../controllers/users/userStoreController.js";
import { userListController } from "../controllers/users/userListController.js";
import { userUpdateController } from "../controllers/users/userUpdateController.js";
import { isEmailExist, isValidRole } from "../helpers/db-validators.js";
import { userDeleteController } from "../controllers/users/userDeleteController.js";



const router = Router();


// http://localhost:8080/api/usuarios
router.get('/', userListController);


router.post('/', [
    check('name', 'El name no es válido').not().isEmpty(),
    check('password', 'El password no es válido y más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( isEmailExist ),
    //check('role', 'El rol no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isValidRole ),
    validateFields
], userStoreController);


// http://localhost:8080/api/usuarios/10
router.put('/:id', userUpdateController);


router.delete('/', userDeleteController);


router.patch('/', userPatch);


export default router;