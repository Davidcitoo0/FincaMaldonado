<?php
// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener datos del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validar credenciales (ejemplo básico)
    if ($username === "usuario" && $password === "contrasena") {
        // Iniciar sesión y redirigir al usuario a la página de destino
        session_start();
        $_SESSION["usuario"] = $username;
        header("Location: panel_control.php");
        exit;
    } else {
        // Credenciales incorrectas, mostrar mensaje de error
        echo "Usuario o contraseña incorrectos";
    }
}
?>