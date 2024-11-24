import { QueueCollection } from "./queueCollection";

/**
 * Demo for using the QueueCollection class.
 */
function demoQueueCollection(): void {
    // Create a queue with a capacity of 3
    const queue = new QueueCollection<number>(3);
    
    try {
        console.log("Enqueueing items...");
        queue.enqueue(1);
        console.log("Enqueued 1");
        queue.enqueue(2);
        console.log("Enqueued 2");
        queue.enqueue(3);
        console.log("Enqueued 3");

        console.log("Current queue size: ", queue.size());

        // Attempt to enqueue an item when the queue is at full capacity
        console.log("Trying to enqueue 4...");
        queue.enqueue(4);  // This should throw an error
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error: ", error.message);
        } else {
            console.error("Unknown error: ", error);
        }
    }

    console.log("Dequeuing items...");
    console.log("Dequeued: ", queue.dequeue());  // Should return 1
    console.log("Dequeued: ", queue.dequeue());  // Should return 2
    console.log("Current queue size: ", queue.size());

    console.log("Dequeuing remaining items...");
    console.log("Dequeued: ", queue.dequeue());  // Should return 3
    console.log("Dequeued: ", queue.dequeue());  // Should return undefined since the queue is empty
}

demoQueueCollection();
