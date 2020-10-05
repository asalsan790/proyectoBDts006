import {Schema, model, DocumentQuery, Document} from 'mongoose'

export class Vehiculo {
    private _matricula: string
    private _marca: string
    private _modelo: string
    constructor(_matricula: string, _marca: string, _modelo: string){
        this._marca = _marca
        this._modelo = _modelo
        this._matricula = _matricula
    }
    get marca(){
        return this._marca
    }
    get modelo(){
        return this._modelo
    }
    get matricula(){
        return this._matricula
    }
    set marca(_marca: string){
        this._marca = _marca
    }
    set modelo(_modelo: string){
        this._modelo = _modelo
    }
    set matricula(_matricula: string){
        this._matricula = _matricula
    }
}
// Definimos el Schema
const VehiculoShema = new Schema({
    matricula: String,
    marca: String,
    modelo: String
})

// La colección de la BD: vehiculos (Plural siempre)
export let vehiculos = model( 'vehiculos', VehiculoShema )

// Creo el tipo para después en el query poder usar los campos 
type tVehiculo = {
    matricula: string,
    marca: string,
    modelo: string
}

/*
Para pasar de objeto Vehículo a objeto Schema
*/
export let objetoSchema = (OVehiculo: Vehiculo) => {
    return {
        matricula: OVehiculo.matricula,
        marca: OVehiculo.marca,
        modelo: OVehiculo.modelo
    }
}

// Recibe un objeto y lo salva
export let salvarVehiculo = async (OVehiculo: Vehiculo) =>{
    await (new vehiculos ( objetoSchema ( OVehiculo) )).save()
}
/*
    Recibe la matrícula y devuelve el objeto Vehículo
    Hay que poner tipo any para que typescript deje utilizar 
    la notación para los campos vehiculo.matricula.
*/

export let getVehiculoMatricula = async (matricula: string): Promise<Vehiculo> => {
        const query: any = await vehiculos.findOne({matricula: matricula})
        if (query == null) {
            throw "No encontrado"
        }
        const vehiculo: tVehiculo = query  // Para poder usar los campos
        return new Vehiculo(vehiculo.matricula, vehiculo.marca, vehiculo.modelo)
}

export let getVehiculos = async (): Promise<Vehiculo[]> => {
    const query: any = await vehiculos.find({matricula: "w"})
    let aV: Vehiculo[] = []
    let vehiculo: tVehiculo
    for( let elemento of query){
        vehiculo = elemento
        aV.push(new Vehiculo(vehiculo.matricula, vehiculo.marca, vehiculo.modelo))
    }
    if (aV.length == 0){
        throw "Sin resultados"
    }
    return aV
}

