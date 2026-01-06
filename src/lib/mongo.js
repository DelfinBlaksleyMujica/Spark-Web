import mongoose from "mongoose";

// console.log("PROCESS: ENV: " , process.env);

const { MONGODB_URI} = process.env;

//Control de error por si no existe la variable de entorno

if(!MONGODB_URI){
    throw new Error('Falta la variable de entorno MONGODB_URI')
}


export const connectDB = async () => {

    try {
        const { connection } = await mongoose.connect(MONGODB_URI);//Aca hago el llamado a la base de datos.
        if ( connection.readyState === 1 ) {
            console.log("Mongo DB connected");
            return Promise.resolve(true);
        }
    } catch (error) {
        console.log(error);
        return Promise.reject(false);
    }
    
}