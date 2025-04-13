import { response, request } from "express";
import { User } from "../../models/user.js";


export const userListController = async(req, res = response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = { is_state: true };

    // const users = await User.find(query)
    //     .skip(Number(from))
    //     .limit(Number(limit));
    // const total = await User.countDocuments(query);

    
    const [total, users ] = await Promise.all([
        User.countDocuments(query),
        User.find(query)
            .skip(Number(from))
            .limit(Number(limit)),
    ]);


    res.json({
        total,
        users
    });
}