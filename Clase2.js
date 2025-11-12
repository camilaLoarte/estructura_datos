// ============================================
// Nombre: Camila Domenica Loarte Aguilar
// Fecha: 12/11/2025
// Práctica: PE 1.3 - Stack y Queue en JavaScript
// ============================================

//1. ============================================Pila LIFO (Last In First Out)================================================
class Stack {
    // un constructor sirve para inicializar los atributos de una clase
    constructor() {
        this.items = []
    }

    push(element) {
        this.items.push(element)
    }

    pop() {
        if (this.isEmpty()) throw new Error("La pila esta vacia") // lanzar un error si la pila esta vacia
            return this.items.pop() // eliminar el ultimo elemento de la pila si no esta vacia
        }
    
    isEmpty() {
        return this.size() === 0
    }

    // peek sirve para ver el ultimo elemento de la pila sin eliminarlo
    peek() {
        if (this.isEmpty()) throw new Error("La pila esta vacia")
            else return this.items[this.size() - 1]
    }
    // size sirve para obtener el tamaño de la pila
    size() {
        return this.items.length
    }

    // clear sirve para limpiar la pila  
    clear() {
        this.items = []
    }

}

/* Pruebas de la clase Stack
* creamos una instancia de la clase Stack
* llamamos a los metodos push, pop, isEmpty, peek, size, clear
*/
let pila = new Stack()
console.log("------------------ LIFO(pila)----------------------")
pila.push('Camila')
pila.push('Domenica')
pila.push('Loarte')
pila.push('Aguilar')
console.log(pila) 

console.log(pila.size())


pila.pop()
console.log(pila)

console.log(pila.size())
console.log(pila.peek()) // ver el ultimo elemento de la pila sin eliminarlo

console.log(pila.isEmpty()) 


pila.clear()
console.log(pila)

console.log(pila.isEmpty()) 
console.log("------------------Fin pila----------------------")


//2. =============================================Cola FIFO (First In First Out)====================================================
class Queue {
    constructor() {
        this.items = []
    }

    // agregar un elemento al final de la cola
    enqueue(element) {
        this.items.push(element)
    }

    // eliminar el primer elemento de la cola
    dequeue() {
        if (this.isEmpty()) throw new Error("La cola esta vacia") 
            return this.items.shift() // eliminar el primer elemento de la cola si no esta vacia

    }

    peek() {
        if (this.isEmpty()) throw new Error("La cola esta vacia")
            return this.items[0]
    }

    isEmpty() {
        return this.size() === 0
    }

    size() {
        return this.items.length;
    }
}

/*
* Pruebas de la clase Queue
* creamos una instancia de la clase Queue
* llamamos a los metodos enqueue, dequeue, isEmpty, peek, size
*/
let cola = new Queue()

cola.enqueue('Camila')
cola.enqueue('Domenica')
cola.enqueue('Loarte')
cola.enqueue('Aguilar')
console.log(cola) 

console.log(cola.size())

cola.dequeue() // elimina el primero de la cola "EL PRIMERO EN ENTRAR ES EL PRIMERO EN SALIR"
console.log(cola) 

console.log(cola.size())
console.log(cola.peek()) // ver el primero de la cola sin eliminarlo

console.log(cola.isEmpty()) // verificar si la cola esta vacia



//3. ============================================Invertir cadena de texto: Hola | aloh========================================

// funcion declarada
function invertirCadena(texto) {

}

// funcion anonima
const invertir = function(texto) {

}

// funcion flecha
const invertirTexto = (texto) => {
    const stack = new Stack();

    // agregar cada caracter del texto a la pila
    for (let char of texto) stack.push(char);
    console.log(texto);

    let textoInvertido = '';

    // sacar cada caracter de la pila y agregarlo al texto invertido
    while (!stack.isEmpty()) textoInvertido += stack.pop();

    return textoInvertido;

}
console.log("------------------Invertir texto----------------------")
console.log(invertirTexto("Karla"));
console.log(invertirTexto("Rompe"));
console.log("------------------Fin Invertir texto----------------------")