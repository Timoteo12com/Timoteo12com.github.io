
document.getElementById('revelarBtn').addEventListener('click', function () {
  const clave = prompt("Ingresa la contraseña:");
  if (clave === "Timoteo") {
    document.getElementById('descripcion').style.display = 'block';
  } else {
    alert("Contraseña incorrecta.");
  }
});
