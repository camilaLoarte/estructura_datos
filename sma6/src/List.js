export default class List{
    //añadir elementos
    add (element){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    //metodo sirve para añadir un elemento en una posicion especifica
    //O(1)
    insert (index, element){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    remove (index){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    //O(1)
    get(index){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    size(){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    isEmpty(){
        return this.size() === 0;
    }
    clear (){
        throw new Error("Funcionalidad pendiente de implementacion");
    }
    [Symbol.iterator](){
        throw new Error("Funcionalidad pendiente de implementacion");
    }

}
