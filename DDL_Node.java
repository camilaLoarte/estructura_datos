public class DDL_Node {
    int data;
    DDL_Node prev;
    DDL_Node next;

    public DDL_Node(int data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
