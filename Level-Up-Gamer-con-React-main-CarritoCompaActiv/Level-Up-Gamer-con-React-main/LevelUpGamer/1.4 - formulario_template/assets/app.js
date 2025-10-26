//Inicio de sesion y Crear cuenta
const nombre = document.getElementById('nomcomlog');
const correolog = document.getElementById('correolog');
const passwordlog = document.getElementById('passwordlog')
const confirmlog = document.getElementById('confirmlog')
const fecha = document.getElementById('fecha')
const run = document.getElementById('runlog')


const soloLetrasEspacios = (str) => /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/.test(str);
const isDuocEmail = (str) => /^[A-Za-z0-9-_.]+@duocuc.cl$/.test(str);
const isProfesorduocEmail = (str) => /^[A-Za-z0-9-_.]+@profesor.duoc.cl$/.test(str);
const isUserEmail = (str) => /^[A-Za-z0-9-_.]+@gmail.com$/.test(str);
const strongPassword = (pwd) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,10}$/.test(pwd);
const soloNuumerosSinVerificador = (str) => /^[0-9].{7}$/.test(str);

if (nombre){

    nombre.addEventListener('input', ()=>{
        if(soloLetrasEspacios(nombre.value.trim())  && nombre.value.trim().length <= 50){
            nombre.classList.add('is-valid');
            nombre.classList.remove('is-invalid');
        }else{
            nombre.classList.add('is-invalid');
            nombre.classList.remove('is-valid');
        }
    });
}

if(correolog){

    correolog.addEventListener('input',()=>{
        if (isDuocEmail(correolog.value.trim()) || isProfesorduocEmail(correolog.value.trim()) || isUserEmail(correolog.value.trim())){
            correolog.classList.remove('is-invalid');
            correolog.classList.add('is-valid');
        }else{
            correolog.classList.add('is-invalid');
            correolog.classList.remove('is-valid');
        }
    });
}

if(passwordlog){

    passwordlog.addEventListener('input', ()=>{
        if(strongPassword(passwordlog.value.trim())){
            passwordlog.classList.remove('is-invalid')
            passwordlog.classList.add('is-valid')
        } else{
            passwordlog.classList.add('is-invalid')
            passwordlog.classList.remove('is-valid')
        }
    });
}

if (confirmlog){

    confirmlog.addEventListener('input', () => {
        if (confirmlog.value.trim() == passwordlog.value.trim() && strongPassword(confirmlog.value.trim())) {
            confirmlog.classList.remove('is-invalid');
            confirmlog.classList.add('is-valid');
        } else {
            confirmlog.classList.add('is-invalid');
            confirmlog.classList.remove('is-valid');
        }
    });
}

if (fecha){

    const hoy = new Date();
    hoy.setDate(hoy.getDate())
    const maxyyyy = (hoy.getFullYear()-18);
    const maxmm = String(hoy.getMonth() + 1).padStart(2,'0')// rellena al comienzo con el valor que se le entrega;
    const maxdd = String(hoy.getDay()).padStart(2,'0');
    const fechaMax = maxyyyy + '-' + maxmm +'-'+ maxdd;
    
    fecha.setAttribute('max',fechaMax);
}


const comunas = {
    "PA" : "Puente Alto",
    "LF" : "La Florida",
    "LP" : "La Pintana",
    "ST" : "Santiago"
}
// creamos funcion para lenar el select de comunas
function LlenarComunas(){
    for (let codigo in comunas){
        const opcion = document.createElement("option");
        opcion.value = codigo.valueOf(); 
        opcion.textContent = comunas[codigo]
        comuna.appendChild(opcion)
    }
    
};
// Llamamos la funcion
LlenarComunas();

if(run){
    run.addEventListener('input', ()=>{
        if(soloNuumerosSinVerificador(run.value.trim())){
            run.classList.remove('is-invalid')
            run.classList.add('is-valid')
        } else{
            run.classList.add('is-invalid')
            run.classList.remove('is-valid')
        }
    });
}