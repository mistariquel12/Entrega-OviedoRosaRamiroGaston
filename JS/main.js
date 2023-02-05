// Pedir informacion personal

let nameUser= prompt("Ingrese su nombre:");
let phoneUser= prompt("Ingrese su numero de teléfono:");
let mailUser= prompt("Ingrese su e-mail:");

//Armar el objeto del usuario

let usuario = {
    nombre: nameUser,
    telefono: phoneUser,
    mail: mailUser
}

// Pedir informacion sobre el evento

let totalInvitados = parseInt(prompt ("Ingrese el total de sus invitados"));

// Revisamos que los invitados no sean menos de 100

while (totalInvitados<100) {
    alert("El minimo de invitados para un presupuesto es de 100 invitados.");
    totalInvitados= parseInt(prompt("Ingrese nuevamente el total de invitados"))
}
//Pedimos información sobre los invitados

let invitadosMenores = parseInt(prompt("Ingrese la cantidad de invitados MENORES de 10 años (Exclusive)"));
let invitadosMayores = parseInt(prompt("Ingrese la cantidad de invitados MAYORES a 10 años (Inclusive)"));

//Revisamos que la suma de invitados total coincida con la suma de los datos de cantidad de invitados ingresados

let sumaInvitados= invitadosMayores + invitadosMenores

while (sumaInvitados != totalInvitados) {
    alert("La suma de invitados mayores y menores es diferente al total de invitados indicados anteriormente (" + totalInvitados + "). Verifique sus datos");
    invitadosMenores = parseInt(prompt("Ingrese la cantidad de invitados menores de 10 años (Exclusive)"));
    invitadosMayores = parseInt(prompt("Ingrese la cantidad de invitados mayores a 10 años (Inclusive)"));
    sumaInvitados= invitadosMayores + invitadosMenores;
}

// Pedimos que elija la cena
let menuCena = prompt("Elija la cena: Milanesa ($200), Asado ($400), Ñoquis ($250), Pizza ($150), Ravioles ($210) o Lasagna ($270)");

// Pasamos los valores a minusculas
menuCena.toLowerCase();

//Comparamos la elección y devolvemos un valor al menú de la cena

switch (menuCena){
    case "milanesa" : menuCena= {menu: "Milanesa", valor: 150}
    break
    case "ñoquis" : menuCena= {menu: "Ñoquis", valor: 250}
    break
    case "lasagna" : menuCena= {menu: "Lasagna", valor: 270}
    break
    case "asado" : menuCena= {menu: "Asado", valor: 400}
    break
    case "pizza" : menuCena= {menu: "Pizza", valor: 150}
    break
    case "ravioles" : menuCena= {menu: "Ravioles", valor: 210}
    break
    default : ""
    break
    
}

//Creamos la función que suma el presupuesto.

function costoPresupuesto() {
    let costoCatering= invitadosMenores*(menuCena["valor"]*0.75) + invitadosMayores*menuCena["valor"];
    return costoCatering
}
// Creamos el valor del presupuesto llamando a la funcion
let costoCatering= costoPresupuesto();

//Alertamos el costo del servicio elegido

alert ("Hola " 
+ usuario["nombre"]
+ ", te agradecemos por tener en cuenta a nuestra empresa. A continuación te dejamos el presupuesto para tu evento: " 
+ "El servicio de catering para " 
+ totalInvitados 
+ " personas con el menú de: " 
+ menuCena["menu"] 
+ " es de: " 
+ costoCatering 
+ ". Te enviaremos a la casilla de mail: " 
+ usuario["mail"]
+ " este mismo presupuesto. Tambien nuestro equipo de comercial hará seguimiento de tu presupuesto y podrá contactarse en el plazo de 72hs hábiles al número " 
+ usuario["telefono"] + ". Muchas gracias.")