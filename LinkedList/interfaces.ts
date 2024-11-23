import { DLinkListNode } from "./linkedListNode";


export interface ILinkedList<T> {
    /**
     * Inserts a new node at the beginning of the linked list
     * @param data - The data to be inserted in the new node
     * @returns The newly created node
     */
    insertInBegin(data: T): DLinkListNode<T>;
    
    /**
     * Inserts a new node at the end of the linked list
     * @param data - The data to be inserted in the new node
     * @returns The newly created node
     */
    insertAtEnd(data: T): DLinkListNode<T>;
    
    /**
     * Deletes a specified node from the linked list
     * @param node - The node to be deleted
     */
    deleteNode(node: DLinkListNode<T>): void;
    
    /**
     * Traverses the linked list and returns an array of all node data
     * @returns An array containing all the data from the linked list nodes
     */
    traverse(): T[];
    
    /**
     * Returns the size (number of nodes) of the linked list
     * @returns The number of nodes in the linked list
     */
    size(): number;
    
    /**
     * Searches for a node based on a comparator function and returns the node if found
     * @param comparator - A function to compare node data
     * @returns The node if found, otherwise null
     */
    search(comparator: (data: T) => boolean): DLinkListNode<T> | null;
}