export function crearUsuario(nombre, rol) {
  if(rol == "admin" || rol == "cliente") {
    return {
      nombre : nombre,
      rol: rol,
      fechaRegistro: "16/07/2025"
    }
  }

  // Rol no valido, devolvemos null
  return null
}