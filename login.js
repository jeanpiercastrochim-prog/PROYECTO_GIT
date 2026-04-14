// Lógica básica de login para el Ejercicio 2
function login(user, pass) {
    if (user === "admin" && pass === "1234") {
        console.log("Acceso concedido");
        return true;
    } else {
        console.log("Credenciales incorrectas");
        return false;
    }
}

console.log("Módulo de Login Cargado");
