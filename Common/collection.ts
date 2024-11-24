/**
 * Abstract class representing a generic collection of items.
 * @typeparam T - The type of elements held in the collection.
 */
abstract class Collection<T> {
    /**
     * Internal storage for the collection elements.
     */
    protected storage: T[] = [];

    /**
     * Returns the number of items in the collection.
     * @returns The size of the collection.
     */
    public size(): number {
        return this.storage.length;
    }

    /**
     * Checks if the collection is full.
     * This method must be implemented by any subclass.
     * @returns True if the collection is full, otherwise false.
     */
    abstract isFull(): boolean;

    /**
     * Checks if the collection is empty.
     * This method must be implemented by any subclass.
     * @returns True if the collection is empty, otherwise false.
     */
    abstract isEmpty(): boolean;

}

export { Collection };