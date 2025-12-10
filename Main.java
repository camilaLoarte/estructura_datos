public class Main {
    public static void main(String[] args) {
        DoublyLinkedList list = new DoublyLinkedList();
        System.out.println("Lista vacia: " + list.isEmpty());
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        list.insertAtEnd(40);
        list.insertAtEnd(60);

        System.out.println("Lista creada: ");

        list.display();
        System.out.println("Lista original");
        list.display();
        System.out.println("Lista reverse");
        list.reverse();
        list.display();

        DoublyLinkedList singleList = new DoublyLinkedList();

        System.out.println("UN solo elemento (Caso borde): ");
        singleList.insertAtEnd(60);
        singleList.display();
        System.out.println("Reversa");
        list.reverse();
        list.display();

        System.out.println("Lista original");
        list.display();
        System.out.println("Eliminar el 20");
        list.deleteByValue(20);
        list.display();
        System.out.println("Eliminar el 60");
        list.deleteByValue(60);
        list.display();
    }
}