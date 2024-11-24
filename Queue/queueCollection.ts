import { Collection } from "../Common/collection";
import { IQueue } from "./interfaces";

/**
 * A queue collection implementation that extends the Collection abstract class and adheres to the IQueue interface.
 * @typeparam T - The type of elements held in the queue.
 */
class QueueCollection<T> extends Collection<T> implements IQueue<T> {
    /**
     * Creates an instance of QueueCollection.
     * @param capacity - The maximum number of items the queue can hold. Defaults to Infinity.
     * @throws {Error} If the capacity is less than or equal to zero.
     */
    public constructor(private capacity: number = Infinity) {
        super();
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than zero");
        }
    }

    /**
     * Adds an item to the end of the queue.
     * Throws an error if the queue has reached its maximum capacity.
     * @param item - The item to be added to the queue.
     * @throws {Error} If the queue has reached its maximum capacity.
     */
    public enqueue(item: T): void {
        if (this.isFull()) {
            throw new Error("Queue has reached max capacity");
        }
        this.storage.push(item);
    }

    /**
     * Removes and returns the item from the front of the queue.
     * @returns The item removed from the front of the queue, or undefined if the queue is empty.
     */
    public dequeue(): T | undefined {
        return this.storage.shift();
    }

    /**
     * Checks if the queue is full.
     * @returns True if the queue has reached its capacity, otherwise false.
     */
    public isFull(): boolean {
        return this.size() >= this.capacity;
    }


    /**
     * Checks if the queue is empty.
     * @returns True if the queue is empty, otherwise false.
     */
    public isEmpty(): boolean {
        return this.size() === 0;
    }
}

export { QueueCollection };
