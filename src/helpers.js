// Calcula la diferencia de años
export function obtenerDiferenciaYear (year){
    return new Date().getFullYear() - year
}

// Calcula el total a pagar según la marca
export const calcularMarca = (marca) => {
    let incremento

    switch (marca) {
        case 'Europeo':
            incremento = 1.30
            break;
        case 'Americano':
            incremento = 1.15
            break;
        case 'Asiatico':
            incremento = 1.05
            break;
        default: incremento = 1
            break;
    }
    return incremento
}

// Calcula el tipo de seguro
export const obtenerPlan = (plan) => {
    return (plan === 'basico' ? 1.2 : 1.5)
}

// Convertir primer mayúscula
export const ucfirst = (texto) => {
    return texto.charAt(0).toUpperCase() + texto.slice(1)
}