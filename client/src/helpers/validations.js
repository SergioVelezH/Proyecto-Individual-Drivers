export function validar(input) {
    const errors = {};
    const regUrl = /^(ftp|http|https):\/\/[^ "]+$/;
    const regFecha = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;
    const regNombre = /^(?!.*\/\/)[A-Za-z0-9][A-Za-z0-9\/]*$/;
  

    if(!regNombre.test(input.name)){
        errors.name = "No puede contener simbolos";
    }

    if(input.name.length < 3 || input.name.length > 8 ){
        errors.name = "El nombre debe tener entre 3 y 8 caractres";
    }

    if(!regNombre.test(input.lastName)){
        errors.lastName = "No puede contener simbolos y numeros";
    }

    if(input.lastName.length < 3 || input.lastName.length > 8 ){
        errors.lastName = "El apellido debe tener entre 3 y 8 caractres";
    }


    if (!regUrl.test(input.image)) {
        errors.image = "El texto debe ser de tipo URL";
      }
  
    if (input.description.length < 50){
        errors.description = "Debe ser mayor a los 50 caracteres";
    }  

    if (input.nationality.length > 15){
        errors.nationality = "No debe tener mas de 15 caracteres";
    }
    
    if(!regFecha.test(input.birthDate)){
        errors.birthDate = "Debe ser completado con una fecha";
    }

    return errors;
  }