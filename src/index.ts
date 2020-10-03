import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { connect, disconnect } from './database/database'
import { Vehiculo, salvarVehiculo, vehiculos, getVehiculoMatricula } from './model/vehiculo' 
let matricula: string 
let marca: string
let modelo: string
let oVehiculo: Vehiculo
const main = async () => {
    let n: number
    await connect()
    do {
        n = await menuPral()
        switch(n) {
            case 1:
                console.log('Opción Nuevo Vehículo')
                matricula = await leerTeclado('Dame la matricula')
                marca = await leerTeclado('Dame la marca') 
                modelo = await leerTeclado('Dame el modelo')
                oVehiculo = new Vehiculo(matricula, marca, modelo)
                break
            case 2:
                console.log('Opción mostrar Vehículo')
                console.log(`La matrícula es: ${oVehiculo.matricula}`)
                console.log(`La marca es: ${oVehiculo.marca}`)
                console.log(`El modelo es: ${oVehiculo.modelo}`)
                break
            case 3:
                console.log('Opción cambiar modelo')
                modelo = await leerTeclado('Dame el modelo')
                oVehiculo.modelo = modelo
                break                
            case 4:
                console.log('Opción salvar automovil')
                await salvarVehiculo (oVehiculo )
                break   
            case 5:
                console.log('Opción recuperar automovil')
                matricula = await leerTeclado('Dame la matricula')
                oVehiculo = await getVehiculoMatricula (matricula)
                console.log( oVehiculo )
                break   
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
    await disconnect()
}
main()



