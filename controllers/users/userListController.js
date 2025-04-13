import { response, request } from "express";
import { User } from "../../models/user.js";


export const userListController = (req, res = response) => {

    const { q, nombre = 'No name', apikey} = req.query;

    //const data = User.

    res.json({
        q,
        nombre
    });
}