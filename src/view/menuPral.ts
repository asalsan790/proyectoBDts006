import { leerTeclado } from './entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Nuevo Vehículo')
    console.log('2.- Mostar Vehículo')
    console.log('3.- Cambiar el modelo')
    console.log('4.- Salvar Automovil')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción') )
    return n
}