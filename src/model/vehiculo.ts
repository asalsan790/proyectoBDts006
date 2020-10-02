import {Schema, model} from 'mongoose'

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
    marca: String,
    modelo: String,
    matricula: String
})
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
// La colección de la BD: vehículos (Plural siempre)
export default model( 'vehiculos', VehiculoShema )

