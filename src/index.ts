import {menuPral} from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
// La clase Vehiculo del modelo de clases
import { Vehiculo } from './model/vehiculo'
import { disconnect } from './database/database'
import { connect } from './database/database'
import { objetoSchema } from './model/vehiculo'
// es la colección de la DB, el model
import vehiculos from './model/vehiculo'  
let marca: string
let modelo: string
let oVeh: Vehiculo
const main = async () => {
    let n: number
    await connect()
    do {
        n = await menuPral()
        switch(n) {
            case 1:
                console.log('Opción Nuevo Vehículo')
                marca = await leerTeclado('Dame la marca') 
                modelo = await leerTeclado('Dame el modelo')
                oVeh = new Vehiculo(marca, modelo)
                break
            case 2:
                console.log('Opción mostrar Vehículo')
                console.log(`La marca es: ${oVeh.marca}`)
                console.log(`El modelo es: ${oVeh.modelo}`)
                break
            case 3:
                console.log('Opción cambiar modelo')
                modelo = await leerTeclado('Dame el modelo')
                oVeh.modelo = modelo
                break                
            case 4:
                console.log('Opción salvar automovil')
                // Obtengo el objeto Schema a partir del objeto Vehiculo
                const oSchema = objetoSchema ( oVeh )
                // Obtengo el documento de la BD a partir del objeto Schema
                const documento = new vehiculos ( oSchema )
                console.log(documento)
                // salvo el documento
                await documento.save()
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



