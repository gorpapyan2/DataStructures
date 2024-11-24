export interface IStack<T> {
    /**
     * Adds an item to the top of the stack.
     * @param item - The item to be added to the stack.
     */
    push(item: T): void;

    /**
     * Removes and returns the item from the top of the stack.
     * @returns The item removed from the top of the stack, or undefined if the stack is empty.
     */
    pop(): T | undefined;

    /**
     * Returns the item at the top of the stack without removing it.
     * @returns The item at the top of the stack, or undefined if the stack is empty.
     */
    peek(): T | undefined;

    /**
     * Returns the number of items in the stack.
     * @returns The size of the stack.
     */
    size(): number;
}
