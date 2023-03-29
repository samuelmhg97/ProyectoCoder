// let users =[]
let account = false;
const users = [
    {   
        id: 1,
        name: "Samu",
        password: "Admin",
        status: "Nomada",
        role: "admin",
        logState: false,
        courses: []
    },
    {
        id:2,
        name: "Balti",
        password: "SamuelSeMereceUnOptimo",
        status:"",
        role: "comprador",
        logState: false,
        courses:[]
    }
];


const inputLoginUser = document.getElementById("Login-name")
const inputRegisterUser = document.getElementById("Register-name")

const inputLoginPassword = document.getElementById("Login-password")
const inputRegisterPassword = document.getElementById("Register-password")
const inputRegister2Password = document.getElementById("Register-2password")

const inputRegisterStatus = document.getElementById("Status")

const btnLogin = document.getElementById("Login-btn")
const btnRegister = document.getElementById("Register-btn")

const confirmRegister = document.getElementsByClassName("confirmRegister")
const confirmLogin = document.getElementsByClassName("confirmLogin")

class User {
    constructor(username, password, status, role, logState, courses, id) {
        this.id = id ,
        this.username = username,
        this.password = password,
        this.status = status,
        this.role = "comprador",
        this.logState = false,
        this.courses = []
    }

    setId(usersArray) {
        this.id = usersArray.length
    }
}



function createUser(users, registerText) {
    if(inputRegisterPassword.value === inputRegister2Password.value) {
        let findUser = users.find((e) => e.name === inputRegisterUser.value)
        if (findUser) {
            registerText.innerHTML= ""
            let pConfirm = document.createElement("div")
            pConfirm.innerHTML = (`<p class="textoaubicar">Usuario Existente</p>`) 
            registerText[0].appendChild(pConfirm)
            registerText.innerHTML= ""
        }  else {
            console.log("se creo")
            const user = new User(inputRegisterUser.value, inputRegisterPassword.value, inputRegisterStatus.value)
            users.push(user)
            user.setId(users)
            registerText.innerHTML= ""
            let pConfirm = document.createElement("div")
            pConfirm.innerHTML = (`<p class="textoaubicar">Usuario Creado con Exito</p>`) 
            registerText[0].appendChild(pConfirm)
            registerText.innerHTML= ""
            window.location.assign("./Planes.html")
        }
    } else {
        console.log("verificación invalida")
    }
}

function saveUserStorage(users) {
    localStorage.setItem("UsersList", JSON.stringify(users))
}

function loginUser(users, loginText) {
    if(inputLoginUser && inputLoginPassword) {
        let findUser = users.find((e) => e.name === inputRegisterUser.value)
        if (findUser) {
            if (findUser.password === inputLoginPassword.value) {
                findUser.logStatus = true
                window.location.assign("./Planes.html")
            }  else {
                loginText.innerHTML= ""
                let pConfirm = document.createElement("div")
                pConfirm.innerHTML = (`<p class="textoaubicar">Clave Invalida</p>`) 
                loginText[0].appendChild(pConfirm)
            } 
                
        }  else {
            loginText.innerHTML= ""
            let pConfirm = document.createElement("div")
            pConfirm.innerHTML = (`<p class="textoaubicar">Usuario Invalido</p>`) 
            loginText[0].appendChild(pConfirm)
        }
    } else {
        console.log("verificación invalida")
    }
}

btnRegister.onclick = (e) => {
    e.preventDefault()
    createUser(users, confirmRegister);
    saveUserStorage(users)
    console.log(users)
}

btnLogin.onclick = (e) => {
    e.preventDefault()
    loginUser(users, confirmLogin)
}
// function userValidation(confirmation)  {
//     confirmation= prompt("Es usted un usuario de Joshua Herrera Group?")
//     if(confirmation ==="si") {
//         account = true
//     } else {
//         console.log(account)
//     }
// }

// const logIn = function() {
//     if(account) {
//             let userAttempts = 1
//             while(userAttempts <= 3) {
//                 userIntro = prompt("Ingrese por favor su usuario (todo en minusculas porfavor)")
//                 user = users.find((e) => e.name === userIntro)
//                 console.log(user)
//                 if(user) break
//                 else {
//                     alert("Usuario incorrecto, ingrese nuevamente su usuario")
//                     userAttempts += 1
//                     continue
//                 }
//             }
//             if(user) {
//                 let passwordAttempts = 1
//                 while(passwordAttempts <= 3) {
//                     passwordIntro = prompt("Ingrese por favor su clave")
//                     if(passwordIntro === user.password) {
//                         alert(`Bienvenido/a ${user.name}`)
//                         user.logState = true
//                         break
//                     } else {
//                         alert("Clave incorrecta, ingrese nuevamente su clave")
//                         passwordAttempts += 1
//                         continue
//                     }
//                 } 
//                 if(user) {
//                     alert("Ingreso exitoso, estos son los planes que tenemos para tí")
//                     return user
//                 }
//                 else {
//                     alert("No pudimos validar su usuario, por lo mismo procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
//                 }
//             } else {
//                 alert("No pudimos validar su usuario, por lo mismo procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
//             }
//     } else {
//         alert("Procederemos a continuar como anonimos y al final del recorrido solicitaremos un mail para comunicarnos con usted")
//     }
// }

// function jobStateValidation() {
//     console.log(user)
//     alert("Hola, en Joshua Herrera Group nos enfocamos en los freelancers y nomadas digitales, ofrecemos paquetes de capacitación y cursos")
//     let jobState = prompt("Cuentanos, que tipo de trabajador eres, nomada o freelancer? en caso de ser ninguno, no te preocupes ofrecemos una guia para capacitarte en ambos.")
//     switch(jobState) {
//         case "nomada": 
//             alert("Genial, nos encantan esos trabajadores independientes que poseen la visión de recorrer el mundo, o viajar como rutina. Estas son las propuestas que tenemos para tí");
//             user.status = jobState
//             break;
//         case "freelancer":
//             alert("Genial, es asombroso ese trabajador autónomo que ofreces sus servicios independientemente del lugar donde cumpla con sus responsabilidades contraídas.Estas son las propuestas que tenemos para tí");
//             user.status = jobState;
//             break
//         default:
//             alert("No pasa nada, Estos son las propuestas que tenemos para tí en las cuales puedes aprender que tipo de trabajador puedes ser")
//     }
// }
