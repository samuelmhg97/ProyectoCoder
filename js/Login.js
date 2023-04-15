let users
let usersCreate = []

const localStorageTest = JSON.parse(localStorage.getItem("UsersCreated"))



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



function createUser(users) {
    if (inputRegisterUser.value && inputRegisterPassword.value && inputRegister2Password.value && inputRegisterStatus.value) { 
    if(inputRegisterPassword.value === inputRegister2Password.value) {
        let findUser = users.find((e) => e.username === inputRegisterUser.value)
        if (findUser) {
            Toast.fire({
                icon: 'error',
                title: 'Usuario existente'
            })
        }  else {
            const user = new User(inputRegisterUser.value, inputRegisterPassword.value, inputRegisterStatus.value)
            users.push(user)
            user.setId(users)

            if(localStorageTest) {
                user.id = users.length + localStorageTest.length + 1
                localStorageTest.push(user)
                localStorage.setItem("UsersCreated", JSON.stringify(localStorageTest))
            } else {
                usersCreate.push(user)
                localStorage.setItem("UsersCreated", JSON.stringify(usersCreate))
            }

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

function loginUser() {
    const localStorageUsers = JSON.parse(localStorage.getItem("UsersCreated"))
    if(inputLoginUser.value && inputLoginPassword.value) {
        let findUser = users.find((e) => e.username === inputLoginUser.value)
        if(findUser) {
            if (findUser.password === inputLoginPassword.value) {
                findUser.logStatus = true
                localStorage.setItem("UserOnline", JSON.stringify(findUser))
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
        }
        else if(localStorageUsers) {
            users = localStorageUsers
            let findUser = users.find((e) => e.username === inputLoginUser.value)
            if (findUser) {
                if (findUser.password === inputLoginPassword.value) {
                    localStorageUsers.logStatus = true
                    localStorage.setItem("UserOnline", JSON.stringify(findUser))
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
        } else{
            let findUser = users.find((e) => e.username === inputLoginUser.value)
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

const getUsers = async function(e) {
    let response = await fetch("../js/users.json")
    users = await response.json()
};

btnRegister.onclick = async (e) => {
    e.preventDefault()
    await getUsers()
    createUser(users, confirmRegister);
}

btnLogin.onclick = async (e) => {
    e.preventDefault()
    await getUsers()
    loginUser()
}
