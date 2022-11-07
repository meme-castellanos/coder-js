let pass = "Memita";

function login() {
  let ingresar = false;

  for (let i = 3; i > 0; i--) {
    let userPass = prompt("Ingresá tu clave");
    if (userPass == pass) {
      alert(
        "Ingreso exitoso. Bienvenida/o al cotizador de seguros para automóviles de Debat Seguros"
      );
      ingresar = true;
      break;
    } else {
      alert("Contraseña incorrecta");
    }
  }
  return ingresar;
}

if (login()) {
  let sumaAsegurada = parseFloat(
    prompt(
      "Ingresa el monto de la suma asegurada (valor actualizado de tu vehículo) o presiona 0 para salir"
    )
  );
  while (sumaAsegurada != 0) {
    function cotizar(sumaAsegurada) {
      let coberturaA = 4000;
      let coberturaB = coberturaA + (0.001 * sumaAsegurada);
      console.log("El valor de la prima para la cobertura B es ", coberturaB);
      let premio = coberturaB * 1.21;

      return premio;
    }
    alert(
    "El valor final aproximado de la cuota a pagar, de acuerdo a la suma asegurada ingresada es: $ " + cotizar(sumaAsegurada)
  );
    break;
  }
  
} else {
  alert(
    "No se pudo ingresar al sistema, verifique su contraseña"
  );
}
alert("Gracias! Hasta Luego");
