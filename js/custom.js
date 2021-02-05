let boton = document.getElementById("btn-registro");

boton.addEventListener("click", () => {
    //Declaración de variables
    let exrrut = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
    let exrnombre =  /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    let exrapell = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
    let exredad =  /^(\+|\-)?\d+$/;
    let exrcorr = /\w+@\w+\.+[a-z]/;
    let exrfecha = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
    let rut = document.getElementById("rut").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let especialidad = document.getElementById("especialidad");
    let strEsp = especialidad.options[especialidad.selectedIndex].text;
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora");
    let strHora = hora.options[hora.selectedIndex].text;
    const mensaje = document.getElementById("alert");

    //Validaciones de campos
    if (rut === "" || nombre === "" || apellidos === "" || edad === "" || correo === "" || especialidad === "" || fecha === "" || hora === ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
     else if (!exrrut.test(rut)){
        alert("El rut no es válido. Pruebe con este formato de ejemplo: 13.022.635-5");
        return false;
    }
    else if (!exrnombre.test(nombre)){
        alert("El nombre no es válido. Ingrese solo letras.");
        return false;
    }
    else if (!exredad.test(edad)){
        alert("La edad no es válida. Ingrese solo números.");
        return false;
    }
    else if (!exrapell.test(apellidos)){
        alert("El apellido no es válido.");
        return false;
    }
    else if (!exrcorr.test(correo)){
        alert("El correo no es válido. Ingrese solo letras.");
        return false;
    }
    else if(especialidad == null || especialidad == 0){
        return false;
    }
    else if (!exrfecha.test(fecha)){
        alert("La fecha no es válida. Pruebe con este formato de ejemplo: 15-02-2021");
        return false;
    }
    //Mensaje Exitoso
    mensaje.innerHTML = `Estimado(a)!  ${nombre}  ${apellidos}, su hora para ${strEsp} ha sido reservada para el día ${fecha}  a las  ${strHora} . Además, se le envió un mensaje a su correo ${correo} con el detalle de su cita. Gracias por preferirnos.`;
});
