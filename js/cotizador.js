let pass = "Memita";

function login() {
  let ingresar = false;

  for (let i = 3; i > 0; i--) {
    let userPass = prompt("Ingresá tu clave");
    if (userPass == pass) {
      alert("Ingreso exitoso. Bienvenida/o al sistema de Debat Seguros");
      ingresar = true;
      break;
    } else {
      alert("Contraseña incorrecta");
    }
  }
  return ingresar;
}
if (login()) {
  let menuPrincipal = prompt(
    "Ingresa una opción del menú para continuar:\n'c' para ingresar al cotizador \n'd' para acceder a los datos de los clientes \n'x' para salir"
  );

  while ((menuPrincipal != "x") & (menuPrincipal != "X")) {
    switch (menuPrincipal) {
      case "c":
        let sumaAsegurada = parseFloat(
          prompt(
            "Ingresa el monto de la suma asegurada (valor actualizado de tu vehículo) o presiona 0 para salir"
          )
        );
        while (sumaAsegurada != 0) {
          function cotizar(sumaAsegurada) {
            let coberturaA = 4000;
            let coberturaB = coberturaA + 0.001 * sumaAsegurada;
            console.log(
              "El valor de la prima para la cobertura B es ",
              coberturaB
            );
            let premio = coberturaB * 1.21;

            return premio;
          }
          alert(
            "El valor final aproximado de la cuota a pagar, de acuerdo a la suma asegurada ingresada es: $ " +
              cotizar(sumaAsegurada)
          );
          break;
        }
        break;
      case "d":
        class Cliente {
          constructor(
            dni,
            apellido,
            nombre,
            domicilio,
            telefono,
            mail,
            compania,
            ramo,
            id
          ) {
            this.dni = parseInt(dni);
            this.apellido = apellido;
            this.nombre = nombre;
            this.domicilio = domicilio;
            this.telefono = parseInt(telefono);
            this.mail = mail;
            this.compania = compania;
            this.ramo = ramo;
            this.id = id;
          }

          asignarId(array) {
            this.id = array.length;
          }
        }

        const clientes = [
          new Cliente(
            28651560,
            "Castellanos",
            "Mercedes",
            "Lote 31 mza 224 La Calera",
            156065975,
            "memitacastellanos@gmail.com",
            "Río Uruguay",
            "Automotor",
            1
          ),
          new Cliente(
            5794302,
            "Abril",
            "Celia",
            "Islas del Atlántico Sur 4550",
            156421255,
            "cbabril@yahoo.com.ar",
            "Mapfre",
            "Automotor",
            2
          ),
          new Cliente(
            28428204,
            "Debat",
            "Juan Pablo",
            "Lote 31 mza 224 La Calera",
            152226092,
            "juandebat@hotmail.com",
            "Mapfre",
            "Vivienda",
            3
          ),
          new Cliente(
            12456987,
            "Luchini",
            "Patricia",
            "Roberto Boyle 6130",
            157619061,
            "patri_luchini@gmail.com",
            "Mapfre",
            "Automotor",
            4
          ),
          new Cliente(
            29965078,
            "Alves",
            "Jorge",
            "Recta Martinolli 4695",
            156605947,
            "jorge.alves@gmail.com",
            "Mapfre",
            "Vivienda",
            5
          ),
        ];

        console.log(clientes);

        let opcion = prompt(
          "Elige una de las siguientes opciones del menú para continuar:\n1.- Buscar un cliente por DNI \n2.- Buscar un cliente por Apellido\n3.- Agregar datos de un nuevo cliente \n4.- Presiona s para salir"
        );
        while ((opcion != "s") & (opcion != "S")) {
          switch (opcion) {
            case "1":
              let dniIngresado = parseInt(
                prompt("Ingresa el DNI del cliente a consultar")
              );
              const buscarDni = clientes.filter(
                (cliente) => cliente.dni == dniIngresado
              );
              for (const datos of buscarDni) {
                alert(
                  "Los datos correspondientes al cliente cuyo DNI es: " +
                    dniIngresado +
                    " son: \nApellido: " +
                    datos.apellido +
                    "\nNombre: " +
                    datos.nombre +
                    "\nDomicilio: " +
                    datos.domicilio +
                    "\nTeléfono: " +
                    datos.telefono +
                    "\nMail: " +
                    datos.mail +
                    "\nCompañía: " +
                    datos.compania +
                    "\nRamo: " +
                    datos.ramo
                );
              }
              console.log(buscarDni);
              break;
            case "2":
              let apellidoIngresado = prompt(
                "Ingresa el apellido del cliente a buscar"
              );
              apellidoIngresado =
                apellidoIngresado[0].toUpperCase() +
                apellidoIngresado.substring(1);

              const filtroApellido = clientes.filter(
                (cliente) => cliente.apellido == apellidoIngresado
              );
              for (const apellido of filtroApellido) {
                alert(
                  "Los datos correspondientes al cliente " +
                    apellidoIngresado +
                    " son: \nDNI: " +
                    apellido.dni +
                    "\nApellido: " +
                    apellido.apellido +
                    "\nNombre: " +
                    apellido.nombre +
                    "\nDomicilio: " +
                    apellido.domicilio +
                    "\nTeléfono: " +
                    apellido.telefono +
                    "\nMail: " +
                    apellido.mail +
                    "\nCompañía: " +
                    apellido.compania +
                    "\nRamo: " +
                    apellido.ramo
                );
              }

              console.log(filtroApellido);
              break;

            case "3":
              let agregarCliente = prompt(
                "Ingresa los datos del cliente en el orden y forma indicados. Separa cada categoría con una barra diagonal (/). \nDNI \nApellido \nNombre \nDomicilio \nTeléfono \ne-mail \nCompañía en la que se genera la póliza \nRamo asegurado (automotor,vivienda, etc.).\nIngresa x para salir"
              );

              const datos = agregarCliente.split("/");
              console.log(datos);

              const nuevoCliente = new Cliente(
                datos[0],
                datos[1],
                datos[2],
                datos[3],
                datos[4],
                datos[5],
                datos[6],
                datos[7]
              );
              clientes.push(nuevoCliente);
              nuevoCliente.asignarId(clientes);
              console.log(clientes);
              break;
            default:
              alert("Elegiste una opción inválida");
              break;
          }
          break;
        }
        break;
      default:
        alert("Elegiste una opción inválida");
        break;
    }
    break;
  }
} else {
  alert("No se pudo ingresar al sistema, verifique su contraseña");
}
alert("Gracias! Hasta Luego");
