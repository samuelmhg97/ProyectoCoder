let user;
let password = 0;
let account = false;
let logState = false;
let total = 0;

const anonimo = "anonimo"
const comprador = "comprador"

let jobState;

const nomada = "nomada" 
const freelancer = "freelancer"
const ninguno = "ninguno"

let course1 = false
let course2 = false

let nacionality = "Venezuela"

function userValidation(confirmation)  {
    confirmation= prompt("Es usted un usuario de Joshua Herrera Group?")
    if(confirmation ==="si") {
        account = true
    } else {
        console.log(account)
    }
}

const logIn = function(user, password) {
    if(account) {
            let userAttempts = 1
            while(userAttempts <= 3) {
                user = prompt("Ingrese por favor su usuario (todo en minusculas porfavor)")
                if(user === comprador) break
                else {
                    alert("Usuario incorrecto, ingrese nuevamente su usuario")
                    userAttempts += 1
                    user = anonimo
                    continue
                }
            }
            if(user === comprador) {
                let passwordAttempts = 1
                while(passwordAttempts <= 3) {
                    password = parseInt(prompt("Ingrese por favor su clave numérica"))
                    if(password === 1234) {
                        alert("Bienvenido/a usuario")
                        logState = true
                        break
                    } else {
                        alert("Clave incorrecta, ingrese nuevamente su clave")
                        passwordAttempts += 1
                        continue
                    }
                } 
                if(logState) {
                    console.log(user)
                    alert("Ingreso exitoso, estos son los planes que tenemos para tí")
                }
                else {
                    user = anonimo
                    console.log(user)
                    alert("No pudimos validar su usuario, por lo mismo procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
                }
            } else {
                console.log(user)
                alert("No pudimos validar su usuario, por lo mismo procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
            }
    } else {
        alert("Procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
    }
}

function jobStateValidation() {
    alert("Hola, en Joshua Herrera Group nos enfocamos en los freelancers y nomadas digitales, ofrecemos paquetes de capacitación y cursos")
    jobState = prompt("Cuentanos, que tipo de trabajador eres, nomada o freelancer? en caso de ser ninguno, no te preocupes ofrecemos una guia para capacitarte en ambos.")
    switch(jobState) {
        case "nomada": 
            alert("Genial, nos encantan esos trabajadores independientes que poseen la visión de recorrer el mundo, o viajar como rutina. Estas son las propuestas que tenemos para tí");
            jobState = nomada;
            break;
        case "freelancer":
            alert("Genial, es asombroso ese trabajador autónomo que ofreces sus servicios independientemente del lugar donde cumpla con sus responsabilidades contraídas.Estas son las propuestas que tenemos para tí");
            jobState = freelancer;
            break
        default:
            alert("No pasa nada, Estos son las propuestas que tenemos para tí en las cuales puedes aprender que tipo de trabajador puedes ser")
    }
}

function purpose() {
    if(jobState === nomada) {
        alert("Hola querido nomada, selecciona el numero que acompaña al titulo del curso, tranquilo puedes tomar hasta un maximo de 2, sabemos que quieres comprar mas pero pensamos en tu vida social")
        let courseMaxQty = 2;
        for (let i = 0; i < courseMaxQty ; i++) {
            console.log(course1,course2)
            let course = parseInt(prompt("n°1 Bases legales y que necesitas para solicitar visa laboral en mas de 20 paises costo: $999Ars n°2 Mentorias de como adaptarte en otros, paises que necesitas hacer y que necesitas buscar a la hora de viajar a otro pais costo $1500Ars, en caso de no desear ninguno por el momento selecciona 0"));
            if(course === 0) {
                break
            }
            else if(course === 1) {
                if(!course1) {
                    total += 999;
                    alert("Curso añadido con exito!")
                    let confirmation = prompt("deseas añadir otro curso?, si o no?")
                    course1 = true
                    if (confirmation == "si" && !course2) {
                        continue
                    } else if(confirmation == "no"){
                        return total
                    } else if(confirmation == "si" && course2) {
                        alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
                        return total
                    } else {
                        do {
                            confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
                        } while(confirmation !== "si" && confirmation !== "no")
                    }
                } else alert("ya añadiste este curso")
            }
            else if(course === 2) {
                if(!course2) {
                    total += 1500;
                    alert("Curso añadido con exito!")
                    let confirmation = prompt("deseas añadir otro curso?, si o no?")
                    course2 = true
                    if (confirmation == "si" && !course1) {
                        continue
                    } else if(confirmation == "no"){
                        return total
                    } else if(confirmation == "si" && course1) {
                        alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
                        return total
                    } 
                    else {
                        do {
                            confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
                        } while(confirmation !== "si" && confirmation !== "no")
                    }
                } else alert("ya añadiste este curso")
            }
            else {
                do {
                    course = parseInt(prompt("Accion invalida por favor selecciona un numero que corresponda"))
                } while(course < 0 && course > 2)
            }
        }
    } 
    else if(jobState === freelancer) {
        alert("Hola querido freelancer, selecciona el numero que acompaña al titulo del curso, tranquilo puedes tomar hasta un maximo de 2, sabemos que quieres comprar mas pero pensamos en tu vida social")
        let courseMaxQty = 2;
        for (let i = 0; i < courseMaxQty ; i++) {
            console.log(course1,course2)
            let course = parseInt(prompt("n°1 Bases legales y tributarias que necesitas antes de cobrar tus trabajos en el exterior costo: $999Ars n°2 Que necesitas saber y en que plataforma debes de buscar tus proximas ofertas laborales costo $1500Ars, en caso de no desear ninguno por el momento selecciona 0"));
            if(course === 0) {
                break
            }
            else if(course === 1) {
                if(!course1) {
                    total += 999;
                    alert("Curso añadido con exito!")
                    let confirmation = prompt("deseas añadir otro curso?, si o no?")
                    course1 = true
                    if (confirmation == "si" && !course2) {
                        continue
                    } else if(confirmation == "no"){
                        return total
                    } else if(confirmation == "si" && course2) {
                        alert("tranquilo freelancer, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
                        return total
                    } else {
                        do {
                            confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
                        } while(confirmation !== "si" && confirmation !== "no")
                    }
                } else alert("ya añadiste este curso")
            }
            else if(course === 2) {
                if(!course2) {
                    total += 1500;
                    alert("Curso añadido con exito!")
                    let confirmation = prompt("deseas añadir otro curso?, si o no?")
                    course2 = true
                    if (confirmation == "si" && !course1) {
                        continue
                    } else if(confirmation == "no"){
                        return total
                    } else if(confirmation == "si" && course1) {
                        alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
                        return total
                    } 
                    else {
                        do {
                            confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
                        } while(confirmation !== "si" && confirmation !== "no")
                    }
                } else alert("ya añadiste este curso")
            }
            else {
                do {
                    course = parseInt(prompt("Accion invalida por favor selecciona un numero que corresponda"))
                } while(course < 0 && course > 2)
            }
        }
    } 
    else {
        alert("estamos trabajando en ello, te contactaremos proximamente")
    }
}

function totalCart() {
    if(jobState) {
        alert("Genial el total de tus cursos a tomar es de $" + total + " pero, te propongo un juegito, tienes sola una oportunidad para ganar un 75% de descuento, algo asi como una coderbeca pero aun mas genial, bien vamos por ello")

        let answer = prompt("¿De que nacionalidad es el creador de este contenido? (escribe el país si o si con la primera letra en mayuscula) a- Argentina  b- Colombia c- Ecuador d- Venezuela e- Ninguna de las anteriores")

        if(answer === nacionality) {
            alert("Es correcto, felicidades! te has ganado un 75% de descuento el total de tu compra, a disfrutarlo")
            let discount = total * 0.75
            total = total - discount
            return total
        } else {
            alert("Ups te equivocaste, la respuesta correcta es " + nacionality)
        }
    }
}
alert("Hola bienvenido a Joshua Herrera Group, antes de mostrarte nuestras propuestas queremos saber si eres ya un usuario, a continuacion aparecerá un espacio de verificacion de usuario, en caso de poseer uno")
userValidation()
logIn()
jobStateValidation()
purpose()
totalCart()
alert("El total de tu carrito querido " + jobState + " es de $" + total)