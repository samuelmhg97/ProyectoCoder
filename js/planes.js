let products
let shoppingCart = []

const planesTitle = document.getElementsByClassName("FirstBodyTitle")
const planesCard= document.getElementsByClassName("cards-Container")



const btnRegister = document.getElementById("btn-LogOut") 

function userLogOut() {
    Swal.fire({
        title: "Estas seguro que deseas cerrar sesión?",
        text: "volveras a la pagina de Log In y deberas iniciar sesión nuevamente",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
        setTimeout(() => {
            localStorage.removeItem("UserOnline")
            window.location.assign("./Login.html")
        }, 4000)
        }
      })
}

function showName(userOnline) {
    if(userOnline) {
        planesTitle[0].innerHTML = `Bienvenido ${userOnline.username}, estos son los planes que tenemos para ti`
    } else {
        planesTitle[0].innerHTML = "Bienvenido, estos son los planes que tenemos para ti"
    }
}

const getProducts = async function(e) {
    let response = await fetch("../js/planes.json")
    products = await response.json()
};

const createProduct = async function(userOnline) {
    await getProducts()
    console.log(products)
    let productsFiltered = products.filter( e => userOnline && e.type === userOnline.status)
    if(productsFiltered)  {
        console.log(productsFiltered)
        planesCard[0].innerHTML = ""
        // let indice = 0
        productsFiltered.map((e) => {
            let productCard = `
            <div class="wrapper">
                <div class="container">
                    <div class="top"></div>
                    <div class="bottom">
                    <div class="left">
                <div class="details">
                    <h4>${e.nombre}</h4>
                    <p>${e.price}</p>
                </div>
                <div class="buy"><i class="material-icons addToCart" data-id=${e.id}>add_shopping_cart</i></div>
                </div>
                <div class="right">
                    <div class="done"><i class="material-icons">done</i></div>
                    <div class="details">
                    <p>${e.nombre}</p>
                    <p>Añadido al carrito</p>
                    </div>
                    <div class="remove"><i class="material-icons">clear</i></div>
                </div>
                </div>
            </div>
            <div class="inside">
                <div class="icon"><i class="material-icons">info_outline</i></div>
                <div class="contents">
                </div>
            </div>
            </div>
            `
            for (let i = 0; i < planesCard.length; i++) {
                planesCard[i].innerHTML += productCard;
            }
            const cardBackgrounds = document.querySelectorAll('.top');
            cardBackgrounds.forEach((cardBackground, index) => {
                cardBackground.style.background = `url(${productsFiltered[index].Imagen}) no-repeat center center`;
            });

            const addToCart = document.querySelectorAll("i.addToCart")
            addToCart.forEach(icon => {
                // icon.addEventListener("click", () => {
                //     shoppingCart.push(icon.id)
                //     console.log(shoppingCart)
                // })
                icon.onclick = () => {
                    if(icon.dataset.id) {
                        shoppingCart.push(icon.dataset.id);
                        Toast.fire({
                            icon: 'success',
                            title: 'Producto añadido al carrito de compras'
                        })

                    }
                }
            
            })
            // const btnAddToCart = document.querySelectorAll(".buy")[indice];
            // const bottomClass = document.querySelectorAll(".bottom")[indice];
            // const removeAddToCart = document.querySelectorAll(".remove")[indice];
            // btnAddToCart.onclick = () => {
            //     bottomClass.classList.add("clicked");
            // }
            // removeAddToCart.onclick = () => {
            //     bottomClass.classList.remove("clicked");
            // }
            // indice++
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
const userOnline = JSON.parse(localStorage.getItem("UserOnline"))
showName(userOnline)
createProduct(userOnline)


btnRegister.addEventListener("click", userLogOut)



















































// function purpose() {
//     if(user.status === "nomada") {
//         alert("Hola querido nomada, selecciona el numero que acompaña al titulo del curso, tranquilo puedes tomar hasta un maximo de 2, sabemos que quieres comprar mas pero pensamos en tu vida social")
//         let courseMaxQty = 2;
//         let findCourses = Courses.filter( e => e.type === user.status)

//         console.log(findCourses)
//         let nomadCoursesOffert=""
//         for (let i = 0 ; i < findCourses.length; i++) {
//             if(i == findCourses.length - 1) {
//                 nomadCoursesOffert += `N${i+1} ${findCourses[i].nombre} con un precio de $${findCourses[i].price}, en caso de no desear ninguno por el momento selecciona 0`
//             }else {
//                 nomadCoursesOffert += `N${i+1} ${findCourses[i].nombre} con un precio de $${findCourses[i].price}, `
//             }
//         }
//         console.log(nomadCoursesOffert)
//         for (let i = 0; i < courseMaxQty ; i++) {
//             let nomadCourse = Courses[0].nomadas[0];
//             let nomadCoursesOffert = ""

//             let course = parseInt(prompt(nomadCoursesOffert));
//             if(course === 0) {
//                 break
//             }
//             else if(course === 1) {
//                 let findCourseInUser = user.Courses.find( e => e.alias === nomadCourse[0].alias)
//                 if(!findCourseInUser) {
//                     total += nomadCourse[0].price;
//                     alert("Curso añadido con exito!")
//                     user.courses.push(nomadCourse[0])
//                     let confirmation = prompt("deseas añadir otro curso?, si o no?")
//                     if (confirmation == "si") {
//                         continue
//                     } else if(confirmation == "no"){
//                         return total
//                     } else if(confirmation == "si" && (user.courses.length > 2)) {
//                         alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
//                         return total
//                     } else {
//                         do {
//                             confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
//                         } while(confirmation !== "si" && confirmation !== "no")
//                     }
//                 } else alert("ya añadiste este curso")
//             }
//             else if(course === 2) {
//                 let findCourseInUser = user.Courses.find( e => e.alias === nomadCourse[1].alias)
//                 if(!findCourseInUser) {
//                     total += nomadCourse[1].price;
//                     alert("Curso añadido con exito!")
//                     user.courses.push(nomadCourse[1])
//                     let confirmation = prompt("deseas añadir otro curso?, si o no?")
//                     if (confirmation == "si") {
//                         continue
//                     } else if(confirmation == "no"){
//                         return total
//                     } else if(confirmation == "si" && (user.courses.length > 2)) {
//                         alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
//                         return total
//                     } 
//                     else {
//                         do {
//                             confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
//                         } while(confirmation !== "si" && confirmation !== "no")
//                     }
//                 } else alert("ya añadiste este curso")
//             }
//             else {
//                 do {
//                     course = parseInt(prompt("Accion invalida por favor selecciona un numero que corresponda"))
//                 } while(course < 0 && course > 2)
//             }
//         }
//     } 
    // else if(user.status === "freelancer") {
    //     alert("Hola querido freelancer, selecciona el numero que acompaña al titulo del curso, tranquilo puedes tomar hasta un maximo de 2, sabemos que quieres comprar mas pero pensamos en tu vida social")
    //     let courseMaxQty = 2;
    //     for (let i = 0; i < courseMaxQty ; i++) {
    //         console.log(course1,course2)
    //         let course = parseInt(prompt());
    //         if(course === 0) {
    //             break
    //         }
    //         else if(course === 1) {
    //             if(!course1) {
    //                 total += 999;
    //                 alert("Curso añadido con exito!")
    //                 let confirmation = prompt("deseas añadir otro curso?, si o no?")
    //                 course1 = true
    //                 if (confirmation == "si" && !course2) {
    //                     continue
    //                 } else if(confirmation == "no"){
    //                     return total
    //                 } else if(confirmation == "si" && course2) {
    //                     alert("tranquilo freelancer, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
    //                     return total
    //                 } else {
    //                     do {
    //                         confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
    //                     } while(confirmation !== "si" && confirmation !== "no")
    //                 }
    //             } else alert("ya añadiste este curso")
    //         }
    //         else if(course === 2) {
    //             if(!course2) {
    //                 total += 1500;
    //                 alert("Curso añadido con exito!")
    //                 let confirmation = prompt("deseas añadir otro curso?, si o no?")
    //                 course2 = true
    //                 if (confirmation == "si" && !course1) {
    //                     continue
    //                 } else if(confirmation == "no"){
    //                     return total
    //                 } else if(confirmation == "si" && course1) {
    //                     alert("tranquilo nomada, sabemos que quieres ir por todo, pero a veces es necesario tomar ciertos descansos, como te dijimos antes el maximo de cursos es de 2, nos preocupamos por tu salud")
    //                     return total
    //                 } 
    //                 else {
    //                     do {
    //                         confirmation = prompt("Comando Invalido, deseas añadir otro curso?, si o no ")
    //                     } while(confirmation !== "si" && confirmation !== "no")
    //                 }
    //             } else alert("ya añadiste este curso")
    //         }
    //         else {
    //             do {
    //                 course = parseInt(prompt("Accion invalida por favor selecciona un numero que corresponda"))
    //             } while(course < 0 && course > 2)
    //         }
    //     }
    // } 
    // else {
    //     alert("estamos trabajando en ello, te contactaremos proximamente")
    // }
// }

// function totalCart() {
//     if(jobState) {
//         alert("Genial el total de tus cursos a tomar es de $" + total + " pero, te propongo un juegito, tienes sola una oportunidad para ganar un 75% de descuento, algo asi como una coderbeca pero aun mas genial, bien vamos por ello")

//         let answer = prompt("¿De que nacionalidad es el creador de este contenido? (escribe el país si o si con la primera letra en mayuscula) a- Argentina  b- Colombia c- Ecuador d- Venezuela e- Ninguna de las anteriores")

//         if(answer === nacionality) {
//             alert("Es correcto, felicidades! te has ganado un 75% de descuento el total de tu compra, a disfrutarlo")
//             let discount = total * 0.75
//             total = total - discount
//             return total
//         } else {
//             alert("Ups te equivocaste, la respuesta correcta es " + nacionality)
//         }
//     }
// }
// alert("Hola bienvenido a Joshua Herrera Group, antes de mostrarte nuestras propuestas queremos saber si eres ya un usuario, a continuacion aparecerá un espacio de verificacion de usuario, en caso de poseer uno")
// userValidation()
// logIn()
// jobStateValidation()
// console.log(user)
// purpose()
// totalCart()
// alert("El total de tu carrito querido " + jobState + " es de $" + total)

