public class DoublyLinkedList {
    private DDL_Node head;
    private DDL_Node tail;

    // inicializar la lista doble
    // tail y head apuntan a null
    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }

    // head es null
    public boolean isEmpty() {
        return head == null;
    }

    // insertar un nulo al final
    public void insertAtEnd(int data) {
        DDL_Node newNode = new DDL_Node(data);

        if (isEmpty()) {
            head = tail = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
    }

    public void display() {
        // System.out.println("Lista vacia");
        DDL_Node current = head;

        while (current != null) {
            System.out.print(current.data + " ");
            if (current.next != null) {
                System.out.print("<--> ");
            }
    
            // inicializar el puntero de next
            current = current.next;
        }
        
        

        System.out.println();

        // 1 <--> 2 <--> 3
    }

    public void reverse() {
        if(isEmpty() || head == tail){
            return; // si se cumple hace un return

        } 
        // si la cabeza no es la cola 
        DDL_Node current = head;
        DDL_Node temp = null;

        while(current != null) {
            // guardar en una temporal para q no se sobre-escriba
            temp= current.prev;
            // Dar la vuelta a los punteros
            current.prev = current.next;
            current.next = temp;
            // el actual va ser el anterior
            current =  current.prev;
        }

        // cambiar la cabecera con la cola
        // declarar variable temporal

        // mientras tanto la cabecera en temporal (sea cola la cabeza y la cabeza la cola)
        
        temp = head;
        head= tail;
        tail = temp;


    }

    public boolean deleteByValue(int data) {
        if(isEmpty()) {
            return false;
        }

        DDL_Node current = head;

        // si no encuentro la data
        while (current != null && current.data != data) {
            current = current.next;

        }

        // si se llego al final y no hay un valor
        if(current == null) return false; // no se puede eliminar porq no se encuentra un valor

        // caso 1:  valor a eliminar es el head
        if(current == head){
            head = head.next;
            if(head != null){
                head.prev =  null;
            } else {
                tail = null; // lista quedo vacia
            }

        } else if(current == tail) {
            // caso 2: eliminar tail
            tail = tail.prev;
            // cuando no tenga ningun elemento la cola va ser nula
            tail.next =  null;


        } else {
            // si el nodo a eliminar es intermedio
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        return true;
    }

}