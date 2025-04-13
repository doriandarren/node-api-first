import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/user.js';
import authRoutes from '../routes/auth.js';

import { dbConnection } from '../database/config.js';

export class Server {
    
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/usuarios';
        this.authPath = '/api/auth';

        //Conectar a DB
        this.conectarDB();

        // Midlewares
        this.midlewares();

        // Rutas app
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }


    midlewares(){

        // CORS
        this.app.use(cors());

        // PArseo del BODY
        this.app.use( express.json() )


        // Directorio publico
        this.app.use( express.static('public') );

    }


    routes(){
        
        this.app.use( this.userPath , userRoutes);

        this.app.use( this.authPath , authRoutes);

    }


    listen(){
        this.app.listen( this.port, ()=> {
            console.log(`Servidor ejecutandose en el puerto: ${ this.port }`);
        });
    }

}