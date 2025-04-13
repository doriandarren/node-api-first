import mongoose from 'mongoose';


const { Schema } = mongoose;


export const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum:[ 'ADMIN_ROLE', 'USER_ROLE' ]
    },
    is_state: {
        type: Boolean,
        default: true,
    },
    is_google: {
        type: Boolean,
        default: false,
    },
});


/**
 * Para eliminar el password como respuesta
 * Esto se puede usar para las implementaciones
 */

UserSchema.methods.toJSON = function() {
    const { __v, password, ...user} = this.toObject();
    return user;
}


export const User = mongoose.model( 'User', UserSchema );