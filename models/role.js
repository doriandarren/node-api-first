import mongoose, { Schema } from 'mongoose';


export const RoleSchema = Schema({
    role:{
        type: String,
        required: [true, 'El role es obligotorio']
    }
});


export const Role = mongoose.model( 'Role', RoleSchema );