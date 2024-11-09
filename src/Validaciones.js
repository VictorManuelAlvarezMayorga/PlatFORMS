export const validarUsuario = (datos) => {
    let errores = {};

    if (!datos.name || datos.name < 2) {
      errores.name = "El nombre no es valido (Puede que sea muy corto)."
    }

    if (!datos.last_name || datos.last_namename < 1) {
      errores.last_name = "Apellido no valido (El apellido es muy corto)";
    }
  
    if (!datos.key || datos.key < 1) {
      errores.key = "La matrícula no es valida.";
    }
  
    if (!datos.phone_number || datos.phone_number < 10) {
      errores.phone_number = "El número de teléfono debe contener 10 numero.";
    }

    if (!datos.email || datos.email < 1) {
      errores.email = "El correo electrónico es obligatorio."
    } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
      errores.email = "El correo electrónico no es válido.";
    }
  

    if (!datos.password || datos.password < 1) {
      errores.password = "El campo de contraseña es obligatorio.";
    } else if(datos.password.length < 6){
        errores.password = "La contraseña debe contener almenos 6 caracteres"
    }
  
    return errores;
  };

  
  export const validarInicioSesion = (datos) => {
    let errores = {};

    if (!datos.email || datos.email < 1) {
      errores.email = "El correo electrónico es obligatorio."
    } else if (!/\S+@\S+\.\S+/.test(datos.email)) {
      errores.email = "El correo electrónico no es válido.";
    }
  

    if (!datos.password || datos.password < 1) {
      errores.password = "El campo de contraseña es obligatorio.";
    } else if(datos.password.length < 6){
        errores.password = "La contraseña debe contener almenos 6 caracteres"
    }
  
    return errores;
  };
  
  export const conteoErrores = (errores) => {
    return Object.keys(errores).length === 0;
  };

  