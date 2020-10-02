import {Schema, model} from 'mongoose'

export class Vehiculo {
    private _marca: string
    private _modelo: string
    constructor(_marca: string, _modelo: string){
        this._marca = _marca
        this._modelo = _modelo
    }
    get marca(){
        return this._marca
    }
    get modelo(){
        return this._modelo
    }
    set marca(_marca: string){
        this._marca = _marca
    }
    set modelo(_modelo: string){
        this._modelo = _modelo
    }
}
// Definimos el Schema
const VehiculoShema = new Schema({
    marca: String,
    modelo: String
})
/*
Para pasar de objeto Vehículo a objeto Schema
*/
export let objetoSchema = (vehiculoO: Vehiculo) => {
    return {
        marca: vehiculoO.marca,
        modelo: vehiculoO.modelo
    }
}
// La colección de la BD: vehículos (Plural siempre)
export default model( 'vehiculos', VehiculoShema )

