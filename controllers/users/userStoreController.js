import { response, request } from "express";
import bcrypt from "bcryptjs";
import { isEmailExist } from "../../helpers/db-validators.js";
import { User } from "../../models/user.js";



export const userStoreController = async(req, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    
    // Validar correo
    isEmailExist(email);


    // Encriptar
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    });
}
