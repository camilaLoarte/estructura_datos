public class DoublyLinkedList {
    private DDL_Node head;
    private DDL_Node tail;

    // Inicializar lista
    public DoublyLinkedList() {
        this.head = null;
        this.tail = null;
    }

    public boolean isEmpty() {
        return head == null;
    }

    // Insertar al final
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

    // Mostrar lista
    public void display() {
        if (isEmpty()) {
            System.out.println("Lista vacia");
            return;
        }

        DDL_Node current = head;
        while (current != null) {
            System.out.print(current.data);
            if (current.next != null) {
                System.out.print(" <-> ");
            }
            current = current.next;
        }
        System.out.println();
    }

    // Revertir lista
    public void reverse() {
        if (isEmpty() || head == tail) {
            return;
        }

        DDL_Node current = head;
        DDL_Node temp = null;

        while (current != null) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = head;
        head = tail;
        tail = temp;
    }

    // Eliminar por valor
    public boolean deleteByValue(int data) {
        if (isEmpty()) {
            return false;
        }

        DDL_Node current = head;

        while (current != null && current.data != data) {
            current = current.next;
        }

        if (current == null) {
            return false;
        }

        // Eliminar head
        if (current == head) {
            head = current.next;
            if (head != null) {
                head.prev = null;
            } else {
                tail = null;
            }
        }
        // Eliminar tail
        else if (current == tail) {
            tail = current.prev;
            tail.next = null;
        }
        // Eliminar nodo intermedio
        else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }

        return true;
    }
}