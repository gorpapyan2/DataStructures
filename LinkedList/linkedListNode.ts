

export class DLinkListNode<T> {

    public next: DLinkListNode<T> | null = null; // Reference to the next node in the list
    public prev: DLinkListNode<T> | null = null; // Reference to the previous node in the list

    /**
     * Constructor to initialize the node with data
     * @param data - The data to be stored in the node
     */
    constructor(public data: T) { }
}