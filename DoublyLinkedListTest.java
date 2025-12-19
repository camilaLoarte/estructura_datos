public class DoublyLinkedListTest {

    public static void main(String[] args) {

        // TC-DLL-001: Lista vacía
        DoublyLinkedList list = new DoublyLinkedList();
        assert list.isEmpty() : "La lista debería iniciar vacía";

        // TC-DLL-002: Insertar en lista vacía
        list.insertAtEnd(10);
        assert !list.isEmpty() : "La lista no debería estar vacía";

        // TC-DLL-003: Reverse con un solo elemento
        list.reverse();
        assert list.deleteByValue(10) : "Debe eliminar el único elemento";
        assert list.isEmpty() : "La lista debe quedar vacía";

        // TC-DLL-004: Eliminar único elemento
        list.insertAtEnd(20);
        assert list.deleteByValue(20) : "Debe eliminar el único nodo";
        assert list.isEmpty() : "Lista vacía después de eliminar";

        // TC-DLL-005: Eliminar head
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        list.deleteByValue(10);
        assert list.deleteByValue(20) : "Debe poder eliminar nuevo head";

        // TC-DLL-006: Eliminar tail
        list.insertAtEnd(40);
        list.insertAtEnd(50);
        assert list.deleteByValue(50) : "Debe eliminar tail correctamente";

        // TC-DLL-007: Eliminar nodo intermedio
        list = new DoublyLinkedList();
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);
        assert list.deleteByValue(20) : "Debe eliminar nodo intermedio";

        // TC-DLL-008: Eliminar inexistente
        assert !list.deleteByValue(99) : "No debe eliminar valores inexistentes";

        // TC-DLL-009: Reverse lista vacía
        list = new DoublyLinkedList();
        list.reverse();
        assert list.isEmpty() : "Reverse en lista vacía no debe fallar";

        System.out.println("Todas las pruebas pasaron correctamente");
    }
}