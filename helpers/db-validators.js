import { Role } from "../models/role.js";
import { User } from "../models/user.js";


export const isValidRole = async( role = '' ) => {
    const duplicated = await Role.findOne({role});
    if(!duplicated){
        throw new Error(`El rol ${role} no está registrado en la BD`);
    }
}


export const isEmailExist = async( email = '' ) => {
    const duplicated = await User.findOne({email});
    if(duplicated){
        throw new Error(`El email ${email} ya está registrado en la BD`);
    }
}


export const isUserById = async( id ) => {
    const exist = await User.findById(id);
    if(!exist){
        throw new Error(`El ID: ${id} no está registrado en la BD`);
    }
}
