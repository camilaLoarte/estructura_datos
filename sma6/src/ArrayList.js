import List from "./List.js"; 

class ArrayList extends List {
    constructor(capacidadInicial = 10) {
        super();
        this.elementos = new Array(capacidadInicial);
        this.tamanio = 0; // Número actual de elementos
        this.capacidad = capacidadInicial; // Capacidad máxima del array interno
    }

    _redimensionar() {
        let nuevaCapacidad = this.capacidad * 2;
        let nuevoArray = new Array(nuevaCapacidad);
        
        // O(n): Copiar todos los elementos al nuevo array
        for (let i = 0; i < this.tamanio; i++) {
            nuevoArray[i] = this.elementos[i];
        }

        this.elementos = nuevoArray;
        this.capacidad = nuevaCapacidad;
    }

    add(elemento) {
        if (this.tamanio >= this.capacidad) {
            this._redimensionar();
        }
        this.elementos[this.tamanio] = elemento;
        this.tamanio++;
        // Complejidad: O(1) en el caso promedio. O(n) si ocurre la redimensión.
    }

    insert(index, elemento) {
        if (index < 0 || index > this.tamanio) {
            throw new RangeError("Índice fuera de rango. Debe estar entre 0 y " + this.tamanio);
        }
        if (this.tamanio >= this.capacidad) {
            this._redimensionar();
        }
        // O(n): Desplazar elementos a la derecha para hacer espacio.
        for (let i = this.tamanio; i > index; i--) {
            this.elementos[i] = this.elementos[i - 1];
        }
        this.elementos[index] = elemento;
        this.tamanio++;
        // Complejidad: O(n) debido al desplazamiento de elementos.
    }

    remove(index) {
        if (index < 0 || index >= this.tamanio) {
            throw new RangeError("Índice fuera de rango. Debe estar entre 0 y " + (this.tamanio - 1));
        }

        const elementoEliminado = this.elementos[index];

        // O(n): Desplazar elementos a la izquierda para tapar el hueco
        // Comienza en el índice eliminado y va hasta el penúltimo elemento.
        for (let i = index; i < this.tamanio - 1; i++) {
            this.elementos[i] = this.elementos[i + 1];
        }
        
        this.tamanio--;
        // Limpiamos la última posición (ahora desocupada)
        this.elementos[this.tamanio] = undefined; 
        
        // Complejidad: O(n) debido al desplazamiento de elementos.
        return elementoEliminado;
    }
    
    get (index){
        if (index < 0 || index >= this.tamanio) {
            throw new RangeError("Índice fuera de rango.");
        }
        return this.elementos[index];
        // Complejidad: O(1)
    }

    size(){
        return this.tamanio;
        // Complejidad: O(1)
    }

    isEmpty(){
        return this.tamanio === 0;
        // Complejidad: O(1)
    }

    [Symbol.iterator]() {
        let index = 0;
        const elementos = this.elementos;
        const tamanio = this.tamanio;
        return {
            next() {
                if(index < tamanio){
                    return {
                        value: elementos[index++],
                        done: false // Debe ser FALSE si hay más elementos
                    }
                }
                return { done: true }; // Debe devolver 'done: true' cuando termina
            }
        }
    }
    
    toString() {
        if(this.tamanio === 0) return "[]";
        let result = "["; // Iniciar como un string
        
        for (let i = 0; i < this.tamanio; i++) {
            // Convertimos el elemento a string y lo agregamos
            result += String(this.elementos[i]); 
            if(i < this.tamanio - 1) result += ', ';
        }
        result += "]"; // Cerrar el corchete
        return result;
    }
}

// Exportamos la clase para que pueda ser importada por demo.js
export default ArrayList;