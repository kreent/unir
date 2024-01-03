function generarArrayDeStrings() {
    let arrayDeStrings = [];
  
    for (let i = 1; i <= 60; i++) {
      arrayDeStrings.push(`Elemento${i}`);
    }
  
    return arrayDeStrings;
  }
  
  // Ejemplo de uso:
  let resultado = generarArrayDeStrings();
  console.log(resultado);
