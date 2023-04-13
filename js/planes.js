
const


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

