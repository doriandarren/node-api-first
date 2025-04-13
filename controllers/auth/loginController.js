import { response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../../models/user.js";





export const loginController = async(req, res = response) => {


    const { email, password } = req.body;
    

    try {

        //Verificar email
        const user = await User.findOne({email});
        if( !user ){
            return res.status(400).json({
                msg: 'Users / Password no son correctos - correo',
            });
        }

        //Veririfcar usuario
        if( !user.is_state ){
            return res.status(400).json({
                msg: 'Users / Password no son correctos - estado: false',
            });
        }


        const validPassword = bcrypt.compareSync( password, user.password );

        if( !validPassword ){
            return res.status(400).json({
                msg: 'Users / Password no son correctos - password',
            });
        }



        return res.json({
            msg: 'Login!!!',
            email,
            password
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Contacte con el Administrador',
        });
    }

}