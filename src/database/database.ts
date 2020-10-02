import mongoose from 'mongoose';
/*
El nombre de la base de datos en local y con el puerto por defecto será
en este caso "concesionario"
Las funciones que exporto la usaré en el import con el mismo nombre y con {}
*/
export let connect = async () => {
    try {
        await mongoose.connect('mongodb://localhost/concesionario', {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log('Conectado a la Base de Datos');
    }
    catch(error) {
        console.log('Error: ' + error);
    }
}

export let disconnect = async () => {
    try {
        await mongoose.disconnect();
        console.log('Desconectado de la Base de Datos');
    }
    catch (error){
        console.log('Error: ' + error);
    }
}

