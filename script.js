// Mensaje en consola
console.log("🌍 Bienvenido a Good Life Travel");

// Scroll suave
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Formulario de contacto
function enviarMensaje(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombre || !correo || !mensaje) {
        alert("⚠ Por favor, completa todos los campos.");
        return;
    }
    alert(`✅ Gracias ${nombre}, pronto responderemos a tu mensaje.`);
    return false;
}

// Inicio de sesión
function iniciarSesion(event) {
    event.preventDefault();
    const usuario = document.getElementById("usuario").value.trim();
    const clave = document.getElementById("clave").value.trim();

    if (usuario === "cliente" && clave === "1234") {
        alert("✅ Bienvenido de nuevo, " + usuario + "!");
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        alert("❌ Credenciales incorrectas.");
    }
    return false;
}