function solicitarNumero() {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un producto que busque: \n 1- Autos \n 2- Motos \n 3- Bicicletas \n 4- Otros" ));
        console.log("Opcion invalida");5
    } while (numero < 1 || numero > 4);
}

function opciones() {
    switch (ingreseUnNumero) {
        case 1:
            alert("Usted selecciono la opcion 1: Autos");
            console.log(auto1);
            console.log(auto2);
            break;
        case 2:
            alert("Usted selecciono la opcion 2: Motos");
            console.log(moto1);
            console.log(moto2);
            break;
        case 3:
            alert("Usted selecciono la opcion 3: Bicicletas");
            console.log(bici1);
            console.log(bici2);
            break;
        case 4:
            alert("Usted selecciono la opcion 4: Otros");
            console.log("No hay mas Opciones xd");
            break;
        default:
            alert("Opcion invalida! Seleccione nuevamente");
            solicitarNumero();
            break;
    }
    console.log(opciones);
}

function Autos(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.modelo = modelo;
}

const auto1 = new Autos("Ford", "Azul", "$"+800000, 2024);
const auto2 = new Autos("Toyota", "Gris", "$"+40000, 2024,);

function Motos(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.modelo = modelo;
}

const moto1 = new Motos("Neiman Marcus", "Negro", "$"+140000, "Fighter");
const moto2 = new Motos("Yamaha", "Rojo", "$"+120000, "BMS Chopper",);

function Bicicletas(marca, color, precio, modelo) {
    this.marca = marca;
    this.color = color;
    this.precio = precio;
    this.modelo = modelo;
}

const bici1 = new Bicicletas("Kawasaki", "Celeste", "$"+800, "GRX600");
const bici2 = new Bicicletas("Bianchi", "Rojo", "$"+1000, "MTB Tourney",);
opciones();