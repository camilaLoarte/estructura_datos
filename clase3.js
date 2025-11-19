arreglo = ["Charlie", "Ricardo", "Camila", "Tais", "Mateo", "Evelyn", "Aidan", 
           "Savier", "Anderson", "Christian", "Virginia", "Castillo", "Fuentes"]

target = "Fuentes"
function busquedaLineal(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} = ${target}?: ${arr[i] === target ? 'Verdadero': 'Falso'}`)
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
//console.log(busquedaLineal(arreglo, target))

arregloEdades = [10, 12, 15, 17, 18, 19, 20, 28, 29, 30]
targetEdades = 28

function busquedaBinaria(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    //console.log(`La mitad ${mid}: ¿${arr[mid]} = ${target}?: ${arr[mid] === target ? 'Verdadero': 'Falso'}`)
    if (arr[mid] === target) return mid;
    //console.log(`La mitad ${mid}: ¿${arr[mid]} < ${target}?: ${arr[mid] === target ? 'Verdadero': 'Falso'}`)
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
//console.log(busquedaBinaria(arregloEdades, targetEdades))

function benchmark(algoritmo, arr, target, iteraciones = 10) {
  const tiempos = [];
  for (let i = 0; i < iteraciones; i++) {
    const inicio = performance.now();
    algoritmo(arr, target);
    const fin = performance.now();
    tiempos.push(fin - inicio);
  }
  return tiempos.reduce((a, b) => a + b) / tiempos.length;
}

// Ejemplo de uso
const tamanos = [100, 1000, 10000, 100000];
for (const n of tamanos) {
  const arr = Array.from({length: n}, (_, i) => i); // [0, 1, 2, ..., n-1]
  const target = Math.floor(n / 2);  // Buscar elemento del medio

  const tLineal = benchmark(busquedaLineal, arr, target);
  const tBinaria = benchmark(busquedaBinaria, arr, target);

  console.log(`n=${n}: Lineal=${tLineal.toFixed(6)}ms, Binaria=${tBinaria.toFixed(6)}ms`);
}