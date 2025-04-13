import { response, request } from "express";
import { User } from "../../models/user.js";




export const userDeleteController = async(req, res = response) => {

    const { id } = req.params;

    //FIsicamente:
    //const user = await User.findByIdAndDelete( id );

    const user = await User.findByIdAndUpdate( id, { is_state: false }, { new: true });


    res.json({
        user
    });
}