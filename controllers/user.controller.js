import { response, request } from "express";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import { isEmailExist } from "../helpers/db-validators.js";


export const userGet = (req, res = response) => {

    const { q, nombre = 'No name', apikey} = req.query;

    res.json({
        msg: 'get API',
        q, 
        nombre, 
        apikey
    });
}

export const userPost = async(req, res = response) => {

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


export const userPut = (req, res = response) => {


    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}


export const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}


export const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}



