import time
import random
import math
import sys

# Aumentar el límite de recursión para manejar arrays grandes, aunque no se usa recursión aquí, es buena práctica
sys.setrecursionlimit(2000)

# --- 1. IMPLEMENTACIÓN DE ALGORITMOS ---

def busqueda_lineal(arr, target):
    """Implementa la búsqueda lineal (O(n))."""
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

def busqueda_binaria(arr, target):
    """Implementa la búsqueda binaria (O(log n)). REQUIERE ARRAY ORDENADO."""
    left, right = 0, len(arr) - 1
    while left <= right:
        # Uso de (left + right) // 2 para evitar desbordamiento en otros lenguajes, aunque en Python no es un problema
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# --- 2. MICRO-BENCHMARK SETUP Y MEDICIÓN DE TIEMPOS ---

def benchmark(algoritmo, arr, target, iteraciones=10):
    """Mide el tiempo promedio de ejecución del algoritmo en segundos."""
    tiempos = []
    for _ in range(iteraciones):
        inicio = time.perf_counter()
        # Aseguramos que el algoritmo se ejecute correctamente
        algoritmo(arr, target)
        fin = time.perf_counter()
        tiempos.append(fin - inicio)
        
    # Convertir a milisegundos (ms) para la tabla de resultados, pero retornar en segundos
    return (sum(tiempos) / len(tiempos))

# Configuración de datasets y ejecución
tamanos = [100, 1000, 10000, 100000, 1000000] # n = [100, 1000, 10000, 100000, 1000000]
ITERACIONES = 10
resultados_ms = []

print(f"--- Ejecutando Benchmarks (Tiempo promedio en segundos, Iteraciones: {ITERACIONES}) ---")

for n in tamanos:
    # Crear array ORDENADO: [0, 1, 2, ..., n-1] para ambos algoritmos
    arr = list(range(n))
    
    # Target: Se busca el ÚLTIMO elemento (n-1). 
    # Esto simula el PEOR CASO para Lineal, pero un caso promedio para Binaria.
    target = n - 1 
    
    # Medición de tiempos (en segundos)
    tiempo_lineal_s = benchmark(busqueda_lineal, arr, target, ITERACIONES)
    tiempo_binaria_s = benchmark(busqueda_binaria, arr, target, ITERACIONES)
    
    # Conversión a milisegundos (ms) para la tabla final
    tiempo_lineal_ms = tiempo_lineal_s * 1000
    tiempo_binaria_ms = tiempo_binaria_s * 1000
    
    # Cálculo del ratio
    ratio = tiempo_lineal_ms / tiempo_binaria_ms if tiempo_binaria_ms > 0 else 0
    
    # Almacenar resultados para la tabla
    resultados_ms.append({
        "n": n,
        "lineal_ms": tiempo_lineal_ms,
        "binaria_ms": tiempo_binaria_ms,
        "ratio": ratio
    })

    # Imprimir en la consola para seguimiento
    print(f"n={n}: Lineal={tiempo_lineal_ms:.6f}ms, Binaria={tiempo_binaria_ms:.6f}ms, Ratio={ratio:.2f}x")

print("\n--- Resultados de la Tabla (usar estos datos para el PDF) ---")
print("Tamaño (n) | Búsqueda Lineal (ms) | Búsqueda Binaria (ms) | Ratio (L/B)")
print("-----------|----------------------|-----------------------|------------")
for r in resultados_ms:
    print(f"{r['n']:<10} | {r['lineal_ms']:.6f} | {r['binaria_ms']:.6f} | {r['ratio']:.2f}x")