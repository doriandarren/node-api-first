import { response, request } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models/user.js";



export const userUpdateController = async(req, res = response) => {

    const { id } = req.params;

    // Para exluirlos
    const { _id, password, google, email, ...updateData} = req.body;

    //TODO validar DB
    if(password){
        const salt = bcrypt.genSaltSync();
        updateData.password = bcrypt.hashSync(password, salt);
    }

    const userNew = await User.findByIdAndUpdate(id, updateData, { new: true });

    res.json({
        userNew
    });
}