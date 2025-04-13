import { Role } from "../models/role.js";
import { User } from "../models/user.js";


export const isValidRole = async(role = '') => {
    const existeRol = await Role.findOne({role});
    if(!existeRol){
        throw new Error(`El rol ${role} no está registrado en la BD`);
    }
}


export const isEmailExist = async(email = '') => {
    const emailDuplicated = await User.findOne({email});
    if(emailDuplicated){
        throw new Error(`El email ${email} ya está registrado en la BD`);
    }
}