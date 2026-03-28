console.error('b) Crear 2 variables con valores numéricos libres:')

cantidadDeGatos=5
cantidadDePasos=3
for (n = 1; n <= cantidadDeGatos ; n++) {
    pasos = "";
  for (m = 1; m <= cantidadDePasos; m++) {
    pasos += "🐾 ";
  }
    console.log("Gato #" + n + ": 🐈" + pasos) 
}


