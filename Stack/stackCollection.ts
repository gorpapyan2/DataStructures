import { Collection } from "../Common/collection";
import { IStack } from "./interfaces";

/**
 * A stack collection implementation that extends the Collection abstract class and adheres to the IStack interface.
 * @typeparam T - The type of elements held in the stack.
 */
class StackCollection<T> extends Collection<T> implements IStack<T> {
    /**
     * Creates an instance of StackCollection.
     * @param capacity - The maximum number of items the stack can hold. Defaults to Infinity.
     * @throws {Error} If the capacity is less than or equal to zero.
     */
    public constructor(private capacity: number = Infinity) {
        super();
        if (capacity <= 0) {
            throw new Error("Capacity must be greater than zero");
        }
    }

    /**
     * Adds an item to the top of the stack.
     * Throws an error if the stack has reached its maximum capacity.
     * @param item - The item to be added to the stack.
     * @throws {Error} If the stack has reached its maximum capacity.
     */
    public push(item: T): void {
        if (this.isFull()) {
            throw new Error("Stack has reached max capacity");
        }
        this.storage.push(item);
    }

    /**
     * Removes and returns the item from the top of the stack.
     * @returns The item removed from the top of the stack, or undefined if the stack is empty.
     */
    public pop(): T | undefined {
        return this.storage.pop();
    }

    /**
     * Returns the item at the top of the stack without removing it.
     * @returns The item at the top of the stack, or undefined if the stack is empty.
     */
    public peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    /**
     * Checks if the stack is full.
     * @returns True if the stack has reached its capacity, otherwise false.
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

export { StackCollection };