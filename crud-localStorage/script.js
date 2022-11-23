let formulario = document.getElementById('data');
let nombre = document.getElementById('nombre'), nit = document.getElementById('nit'), fundacion = document.getElementById('fundacion'), direccion = document.getElementById('direccion');
let listado = document.getElementById('listado');

let arrayEmpresas = [];

let empresa = {
    nombre: "",
    nit: "",
    fundacion: "",
    direccion: ""
}

function agregarEmpresa(name, nit, fundacion, direccion) {
    empresa = {
        nombre: name,
        nit: nit,
        fundacion: fundacion,
        direccion: direccion
    }
    arrayEmpresas.push(empresa)
}

formulario.onsubmit = function (e) {
    e.preventDefault()

    let nombreE = nombre.value,
        nitE = nit.value,
        fundacionE = fundacion.value,
        direccionE = direccion.value

    agregarEmpresa(nombreE, nitE, fundacionE, direccionE)
    console.log(arrayEmpresas);
    nombre.value = ''
    nit.value = ''
    fundacion.value = ''
    direccion.value = ''
    GuardarBD();
}

function GuardarBD() {
    localStorage.setItem('empresa', JSON.stringify(arrayEmpresas)),
        MostrarBD()
}

document.addEventListener('DOMContentLoaded', MostrarBD)

function MostrarBD() {
    listado.innerHTML = ""

    arrayEmpresas = JSON.parse(localStorage.getItem('empresa'))

    for (let i = 0; i < arrayEmpresas.length; i++) {
        listado.innerHTML += `
        <div class="alert alert-primary d-flex justify-content-between" role="alert">
            <div class="d-flex flex-column">
                <strong>${arrayEmpresas[i].nombre}</strong>
                <span><i class="fa fa-address-card-o mr-3" aria-hidden="true"></i>${arrayEmpresas[i].nit}</span>
                <span><i class="fa fa-building-o mr-3" aria-hidden="true"></i>${arrayEmpresas[i].fundacion}</span>
                <span><i class="fa fa-map-marker mr-3" aria-hidden="true"></i>${arrayEmpresas[i].direccion}</span>
            </div>
            <div>
                <span>
                    <i class="fa fa-pencil ml-3" aria-hidden="true"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
            </div>
        </div>
        `
    }

}

listado.onclick = function (e) {
    e.preventDefault()

    if (e.target.classList[1] === "fa-pencil" || e.target.classList[1] === "fa-trash") {
        let nEmpresa = e.target.parentNode.parentNode.parentNode.querySelector('strong').innerHTML

        if (e.target.classList[1] === "fa-trash") {
            elimarDB(nEmpresa);
        }
        else {
            editarDB(nEmpresa);
        }
    }
}

function elimarDB(nEmpresa) {
    arrayEmpresas.forEach((e, i) => {
        if (e.nombre == nEmpresa) {
            arrayEmpresas.splice(i, 1)
        }
    })
    GuardarBD()
}

function editarDB(nEmpresa) {
    for (let i = 0; i < arrayEmpresas.length; i++) {
        if (arrayEmpresas[i].nombre === nEmpresa) {

            /* editar */

        }
    }
    GuardarBD();
}