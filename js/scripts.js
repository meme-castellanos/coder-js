const rUser = document.getElementById("registeredUser"),
  rPassword = document.getElementById("registeredPassword"),
  btnIngreso = document.getElementById("btnIngresar"),
  nUser = document.getElementById("newUser"),
  nPassword = document.getElementById("newPassword"),
  btnRegistro = document.getElementById("btnRegistrarse");

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

  asignarId(clientes) {
    this.id = clientes.length;
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

btnIngreso.addEventListener("click", (e) => {
  let login = false;
  e.preventDefault();
  sessionStorage.setItem("mail", JSON.stringify(rUser.value));
  sessionStorage.setItem("pass", JSON.stringify(rPassword.value));
  for (const cliente of clientes) {
    if (cliente.mail == rUser.value && cliente.dni == rPassword.value) {
      login = true;
      //Ingreso exitoso - muestra menú principal
      document.querySelector(".login").style.display = "none";
      document.querySelector("#registrarse").style.display = "none";
      document.querySelector(".hidden").style.display = "flex";
      //Presiona btn para cotizar
      const btnCotizar = document.querySelector("#cotizar");
      btnCotizar.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".cotizarOk").style.display = "flex";
        const sumaIngresada = document.querySelector("#sumaIngresada");
        const btnCalcular = document.querySelector("#btnCalcular");
        btnCalcular.addEventListener("click", (e) => {
          e.preventDefault();
          sessionStorage.setItem(
            "sumaIngresada",
            JSON.stringify(sumaIngresada.value)
          );
          const sumaAsegurada = JSON.parse(
            sessionStorage.getItem("sumaIngresada")
          );
          console.log(sumaAsegurada);
          while (sumaAsegurada != 0) {
            function cotizar(sumaAsegurada) {
              let coberturaA = 4000;
              let coberturaB = coberturaA + 0.001 * sumaAsegurada;
              let premio = coberturaB * 1.21;
              return premio;
            }
            const resultadoCuota = document.querySelector("#resultadoCuota");
            resultadoCuota.innerHTML = `<p>El valor final aproximado de la cuota a pagar, de acuerdo a la suma asegurada ingresada es: $${cotizar(
              sumaAsegurada
            )}`;
            break;
          }
          setInterval("location.reload()", 4000);
        });
      });
      //presiona btn datos clientes
      const btnDatos = document.querySelector("#btnDatos");
      btnDatos.addEventListener("click", (e) => {
        e.preventDefault();
        let clienteRecuperado = JSON.parse(sessionStorage.getItem("pass"));
        const datosClientes = document.querySelector("#datosCliente");
        document.querySelector("#datosCliente").style.display = "none";
        const buscarDni = clientes.filter(
          (cliente) => cliente.dni == clienteRecuperado
        );
        for (const datos of buscarDni) {
          datosClientes.innerHTML = `<p>Los datos correspondientes al cliente cuyo DNI es: ${clienteRecuperado} </p>  <p>son: </p>  <p>Apellido:${datos.apellido}</p>  <p>Nombre:${datos.nombre}</p><p>Domicilio:${datos.domicilio}</p>   <p>Teléfono:${datos.telefono}</p>   <p>Mail:${datos.mail} </p>   <p> Ramo: ${datos.ramo}</p>  `;
        }
        document.querySelector("#datosCliente").style.display = "flex";
        setInterval("location.reload()", 3000);
      });
    } else {
      document.querySelector(".login").style.display = "none";
      document.querySelector("#registrarse").style.display = "flex";
      const uUser = document.querySelector("#uUser");
      uUser.innerHTML = "Usuario no registrado";
      const btnRegistrarse = document.querySelector("#btnRegistrarse");
      btnRegistrarse.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#newUser").style.display = "flex";
        document.querySelector("#registrarse").style.display = "none";
        const btnEnviarDatos = document.querySelector("#btnEnviarDatos"),
          nDni = document.querySelector("#nDni"),
          nUserName = document.querySelector("#nUserName"),
          nUserApellido = document.querySelector("#nUserApellido"),
          nUserDir = document.querySelector("#nUserDir"),
          nUserTel = document.querySelector("#nUserTel"),
          nUserMail = document.querySelector("#nUserMail"),
          registrado = document.querySelector("#registrado");
          btnEnviarDatos.addEventListener("click", (e) => {
          e.preventDefault();
          const cliente = new Cliente(
            nDni.value,
            nUserName.value,
            nUserApellido.value,
            nUserDir.value,
            nUserTel.value,
            nUserMail.value
          );
          clientes.push(cliente);
          cliente.asignarId(clientes);
          
          localStorage.setItem('clienteNuevo',JSON.stringify(cliente));
          
          let registroRecuperado = JSON.parse(localStorage.getItem('clienteNuevo'));
          let nuevoRegistro = clientes.filter(
            (cliente) => cliente.id == registroRecuperado.id
          );
          console.log(nuevoRegistro);
          
         nuevoRegistro.forEach(element => {
            registrado.innerHTML += JSON.stringify(element);
          });
        });
      });
    }
    //setInterval("location.reload()", 5000);
  }
});
