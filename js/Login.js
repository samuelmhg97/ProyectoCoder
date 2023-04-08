let users



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



function createUser(array) {
    if (inputRegisterUser.value && inputRegisterPassword.value && inputRegister2Password.value && inputRegisterStatus.value) { 
    if(inputRegisterPassword.value === inputRegister2Password.value) {
        let findUser = array.find((e) => e.name === inputRegisterUser.value)
        if (findUser) {
            Toast.fire({
                icon: 'error',
                title: 'Usuario existente'
            })
        }  else {
            const user = new User(inputRegisterUser.value, inputRegisterPassword.value, inputRegisterStatus.value)
            array.push(user)
            user.setId(array)
            Toast.fire({
                icon: 'success',
                title: 'Usuario Creado con exito, seras redirigido a nuestra pagina de productos'
            })
            // setTimeout(() => {
            //     window.location.assign("./Planes.html")
            // }, 4000)
        }
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Verifique porfavor la contraseña'
        })
    } } else {
        Toast.fire({
            icon: 'error',
            title: 'Porfavor Rellenar los campos    '
        })
    }
}

function saveUserStorage(array) {
    localStorage.setItem("UsersList", JSON.stringify(array))
}

function loginUser(users, loginText) {
    if(inputLoginUser.value && inputLoginPassword.value) {
        let findUser = users.find((e) => e.name === inputRegisterUser.value)
        if (findUser) {
            if (findUser.password === inputLoginPassword.value) {
                findUser.logStatus = true
                Toast.fire({
                    icon: 'success',
                    title: 'Inicio de sesion exitoso, seras redirigido'
                })
                setTimeout(() => {
                    window.location.assign("./Planes.html")
                }, 4000)
            }  else {
                Toast.fire({
                    icon: 'error',
                    title: 'Contraseña Invalida'
                })
            } 
                
        }  else {
            Toast.fire({
                icon: 'error',
                title: 'Usuario Invalido'
            })
        }
    } else {
        Toast.fire({
            icon: 'error',
            title: 'Porfavor Rellenar los campos    '
        })
    }
}
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

const getUsers = async function() {
    let response = await fetch("../js/users.json")
    let users = await response.json()
    console.log(users)
    createUser(users)
    // saveUserStorage(users)
};
// btnRegister.onclick = (e) => {
//     e.preventDefault()
//     createUser(users, confirmRegister);
//     saveUserStorage(users)
//     console.log(users)
// }
btnRegister.onclick = getUsers

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
