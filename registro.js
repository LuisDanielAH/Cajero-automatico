const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const users = [
        { email: 'mali@correo.com', password: 'contraseña1', name: 'Mali', saldo:200 },
        { email: 'gera@correo.com', password: 'contraseña2', name: 'Gera', saldo:290 },
        { email: 'maui@correo.com', password: 'contraseña3', name: 'Maui', saldo:67 }
      ];
      
      // Guardar el arreglo en el localStorage
      localStorage.setItem('users', JSON.stringify(users));

    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos')
    }
    alert(`Bienvenido ${validUser.name}`)
    window.location.href = `${validUser.name}.html`

    /*function functionRetirar() {
        console.log("Función ejecutada");
        document.getElementById('Vnv').classList.toggle('visible');
    }

    function visible(){
    document.addEventListener('DOMContentLoaded', function () {
        // Esperar a que el DOM esté completamente cargado
    
        const miElemento = document.getElementById('Vnv');
        const miBoton = document.getElementById('R');
    
        miBoton.addEventListener('click', function () {
            // Cambiar la clase al hacer clic en el botón
            miElemento.classList.toggle('visible');
        });
    });
    }*/

})