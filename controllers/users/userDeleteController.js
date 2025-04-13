import { response, request } from "express";




export const userDeleteController = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}