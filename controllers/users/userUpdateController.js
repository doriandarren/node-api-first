import { response, request } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models/user.js";



export const userUpdateController = async(req, res = response) => {

    const { id } = req.params;

    // Para exluirlos
    const { password, google, email, ...resto} = req.body;

    //TODO validar DB
    if(password){
        const salt = bcrypt.genSaltSync();
        resto.password = bcrypt.hashSync(password, salt);
    }


    const userNew = await User.findByIdAndUpdate(id, resto);

    res.json({
        userNew
    });
}