#!/usr/bin/env python3
"""
PE-1.2 – Script de referencia
Acceso aleatorio vs secuencial en array/lista enlazada

Uso:
    python pe12_accesos_array_lista.py --N 100000 --K 50000 --seed 42
    # Puedes ejecutar varias combinaciones cambiando N y K.

Salida:
    Muestra tiempos (ms) para:
      - Construcción de estructuras
      - Acceso secuencial y aleatorio en array
      - Acceso secuencial y aleatorio en lista enlazada
"""

import time
import random
import argparse

def medir(func):
    t0 = time.perf_counter()
    _ = func()
    t1 = time.perf_counter()
    return (t1 - t0) * 1000.0  # ms

def construir_array(N):
    return list(range(N))

class Nodo:
    __slots__ = ("v","nxt")
    def __init__(self, v, nxt=None):
        self.v = v
        self.nxt = nxt

def construir_lista(N):
    head = None
    # Construimos al frente para O(1) por inserción
    for i in range(N - 1, -1, -1):
        head = Nodo(i, head)
    return head

def acceso_secuencial_array(a, K):
    n = len(a)
    s = 0
    for i in range(K):
        s += a[i % n]
    return s

def acceso_aleatorio_array(a, idxs):
    s = 0
    for i in idxs:
        s += a[i]
    return s

def acceso_secuencial_lista(head, K, N):
    s = 0
    curr = head
    for _ in range(K):
        s += curr.v
        curr = curr.nxt if curr.nxt else head
    return s

def acceso_aleatorio_lista(head, idxs, N):
    # Para cada índice, camina desde el inicio hasta la posición (O(n) por acceso)
    s = 0
    for j in idxs:
        curr = head
        steps = j
        while steps > 0:
            curr = curr.nxt
            steps -= 1
        s += curr.v
    return s

def correr(N=100_000, K=50_000, seed=42):
    random.seed(seed)
    idxs = [random.randrange(N) for _ in range(K)]

    # Construcción
    t_build_array = medir(lambda: construir_array(N))
    a = construir_array(N)
    t_build_list = medir(lambda: construir_lista(N))
    head = construir_lista(N)

    # Medición
    t_seq_arr = medir(lambda: acceso_secuencial_array(a, K))
    t_rand_arr = medir(lambda: acceso_aleatorio_array(a, idxs))
    t_seq_list = medir(lambda: acceso_secuencial_lista(head, K, N))
    t_rand_list = medir(lambda: acceso_aleatorio_lista(head, idxs, N))

    print(f"N={N}, K={K}, seed={seed}")
    print(f"Construcción: array={t_build_array:.2f} ms, lista={t_build_list:.2f} ms")
    print(f"Secuencial:   array={t_seq_arr:.2f} ms, lista={t_seq_list:.2f} ms")
    print(f"Aleatorio:    array={t_rand_arr:.2f} ms, lista={t_rand_list:.2f} ms")

def main():
    parser = argparse.ArgumentParser(description="Acceso aleatorio vs. secuencial en array y lista enlazada")
    parser.add_argument("--N", type=int, default=100_000, help="Tamaño de la estructura (por defecto 100000)")
    parser.add_argument("--K", type=int, default=50_000, help="Número de accesos (por defecto 50000)")
    parser.add_argument("--seed", type=int, default=42, help="Semilla aleatoria (por defecto 42)")
    args = parser.parse_args()

    # Tip: si tu equipo es lento, prueba N=30000, K=10000
    correr(N=args.N, K=args.K, seed=args.seed)

if __name__ == "__main__":
    main()
