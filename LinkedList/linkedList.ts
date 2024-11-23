import { ILinkedList } from "./interfaces";
import { DLinkListNode } from "./linkedListNode";


export class LinkedList<T> implements ILinkedList<T> {
    private head: DLinkListNode<T> | null = null; // Reference to the first node of the linked list
    private tail: DLinkListNode<T> | null = null; // Reference to the last node of the linked list
    private length: number = 0; // Keeps track of the number of nodes in the linked list

    /**
     * Inserts a new node at the beginning of the linked list
     * @param data - The data to be inserted in the new node
     * @returns The newly created node
     */
    public insertInBegin(data: T): DLinkListNode<T> {
        const node = new DLinkListNode(data);
        if (!this.head) {
            // If the list is empty, set both head and tail to the new node
            this.head = node;
            this.tail = node;
        } else {
            // Otherwise, insert the node at the beginning and update pointers
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    /**
     * Inserts a new node at the end of the linked list
     * @param data - The data to be inserted in the new node
     * @returns The newly created node
     */
    public insertAtEnd(data: T): DLinkListNode<T> {
        const node = new DLinkListNode(data);
        if (!this.tail) {
            // If the list is empty, set both head and tail to the new node
            this.head = node;
            this.tail = node;
        } else {
            // Otherwise, insert the node at the end and update pointers
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    /**
     * Deletes a specified node from the linked list
     * @param node - The node to be deleted
     */
    public deleteNode(node: DLinkListNode<T>): void {
        if (!this.head) {
            // If the list is empty, there's nothing to delete
            return;
        }

        if (node === this.head) {
            // If the node to be deleted is the head, update the head pointer
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                // If the list becomes empty, update the tail pointer as well
                this.tail = null;
            }
        } else if (node === this.tail) {
            // If the node to be deleted is the tail, update the tail pointer
            this.tail = this.tail.prev;
            if (this.tail) {
                this.tail.next = null;
            } else {
                // If the list becomes empty, update the head pointer as well
                this.head = null;
            }
        } else {
            // If the node is in the middle, update the pointers of the adjacent nodes
            if (node.prev) {
                node.prev.next = node.next;
            }
            if (node.next) {
                node.next.prev = node.prev;
            }
        }
        this.length--;
    }

    /**
     * Traverses the linked list and returns an array of all node data
     * @returns An array containing all the data from the linked list nodes
     */
    public traverse(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }

    /**
     * Returns the size (number of nodes) of the linked list
     * @returns The number of nodes in the linked list
     */
    public size(): number {
        return this.length;
    }

    /**
     * Searches for a node based on a comparator function and returns the node if found
     * @param comparator - A function to compare node data
     * @returns The node if found, otherwise null
     */
    public search(comparator: (data: T) => boolean): DLinkListNode<T> | null {
        let current = this.head;
        while (current) {
            if (comparator(current.data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}
