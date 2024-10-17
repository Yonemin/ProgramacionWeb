document.title = "Iniciar Sesión";

//Crear contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';
document.body.appendChild(container);

//Crear título
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesión';
title.style.color = 'red';
title.style.fontFamily = 'Arial'
container.appendChild(title);

//Crear el formulario
const form = document.createElement('form');
container.appendChild(form);

//Crear campos
const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Nombre de Usuario: ';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
usernameLabel.style.fontFamily = 'Arial';
usernameInput.style.fontFamily = 'Arial';
form.appendChild(usernameLabel);
form.appendChild(usernameInput);

const space = document.createElement('br');
form.appendChild(space);

const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña de Usuario: ';
const passwordInput = document.createElement('input');
passwordInput.type = 'text';
passwordInput.required = true;
passwordLabel.style.fontFamily = 'Arial';
passwordInput.style.fontFamily = 'Arial';
form.appendChild(passwordLabel);
form.appendChild(passwordInput);

const space2 = document.createElement('br');
form.appendChild(space2);

const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar Sesión';
submitButton.style.fontFamily = 'Arial'
form.appendChild(submitButton);

const message = document.createElement('p');
message.textContent = 'ola';
container.appendChild(form)
container.appendChild(message);


//Datos de inicio de sesión
const validarUser = 'Juanito';
const validarPassword = 'Pochita';

//Validar el nombre y contraseña
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    if(usernameInput.value==validarUser){
        if(passwordInput.value==validarPassword){
            alert('Has iniciado sesión correctamente.');
        }else{
            alert('Información de Contraseña Inválida.');
        }
    }else{
        alert('Información del Usuario Inválida.')
    }
});
