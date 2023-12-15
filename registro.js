const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const users = [
        { email: 'mali@correo.com', password: 'contraseña1', name: 'Mali' },
        { email: 'gera@correo.com', password: 'contraseña2', name: 'Gera' },
        { email: 'maui@correo.com', password: 'contraseña3', name: 'Maui' }
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


})