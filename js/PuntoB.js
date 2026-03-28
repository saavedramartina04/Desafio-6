console.error('b) Crear 2 variables con valores numéricos libres:')

cantidadDeGatos=5
cantidadDePasos=3
for (var n = 1; n <= cantidadDeGatos ; n++) {
    var pasos = "";
  for (m = 1; m <= cantidadDePasos; m++) {
    pasos += "🐾 ";
  }
    console.log("Gato #" + n + ": 🐈" + pasos) 
}


