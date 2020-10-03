import {Schema, model} from 'mongoose'
import { plainToClass } from "class-transformer"; 

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
// La colección de la BD: vehiculos (Plural siempre)
export let vehiculos = model( 'vehiculos', VehiculoShema )
// Recibe un objeto y lo salva
export let salvarVehiculo = async (OVehiculo: Vehiculo) =>{
    await (new vehiculos ( objetoSchema ( OVehiculo) )).save()
}
/*
    Recibe la matrícula y devuelve el objeto Vehículo
    Hay que poner tipo any para que typescript deje utilizar 
    la notación para los campos vehiculo.matricula
    type script no reconoce el tipo que deveulve findOne.
*/
export let getVehiculoMatricula = async (matricula: string): Promise<Vehiculo> => {
    let dVehiculo: any = await vehiculos.findOne({matricula: matricula})
    let oVehiculo = new Vehiculo(dVehiculo.matricula, dVehiculo.marca, dVehiculo.modelo)
    return oVehiculo
}
