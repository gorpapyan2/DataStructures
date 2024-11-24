export interface IQueue<T> {
    /**
     * Adds an item to the end of the queue.
     * @param item - The item to be added to the queue.
     */
    enqueue(item: T): void;

    /**
     * Removes and returns the item from the front of the queue.
     * @returns The item removed from the front of the queue, or undefined if the queue is empty.
     */
    dequeue(): T | undefined;

    /**
     * Returns the number of items in the queue.
     * @returns The size of the queue.
     */
    size(): number;
}
