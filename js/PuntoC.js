console.error('c) Adaptar el ejercicio anterior para que se muestren 2 gatos alternadamente:')
for (var n = 1; n <= cantidadDeGatos ; n++) {
     var ResCantGatos = 'Gato #' + n + ': 🐈' +
   (n%2 == 0? '⬛': '') 

    var pasos = '🐾';
    var resultado = ' '
  for (m = 1; m <= cantidadDePasos; m++) {
   
    resultado += pasos + '';
    
}
console.log(ResCantGatos +  resultado) 
}