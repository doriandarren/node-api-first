import { response, request } from "express";



export const userPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}



