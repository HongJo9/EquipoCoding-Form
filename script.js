const users = [
    { username: 'saul', password: 'password1' },
    { username: 'diego', password: 'password2' },
    { username: 'luis', password: 'password3' }
];

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Buscar el usuario en el array
    const user = users.find(user => user.username === username);

    // Validar el usuario y la contraseña
    if (user && user.password === password) {
        alert(`Bienvenido, ${username}!`);
    } else {
        alert('Contraseña incorrecta');
    }
});
