import { StackCollection } from "./stackCollection";

/**
 * Demo for using the StackCollection class.
 */
function demoStackCollection(): void {
    // Create a stack with a capacity of 3
    const stack = new StackCollection<number>(3);

    try {
        console.log("Pushing items onto stack...");
        stack.push(1);
        console.log("Pushed 1");
        stack.push(2);
        console.log("Pushed 2");
        stack.push(3);
        console.log("Pushed 3");

        console.log("Current stack size: ", stack.size());

        // Attempt to push an item when the stack is at full capacity
        console.log("Trying to push 4...");
        stack.push(4);  // This should throw an error
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error: ", error.message);
        } else {
            console.error("Unknown error: ", error);
        }
    }

    console.log("Popping items from stack...");
    console.log("Popped: ", stack.pop());  // Should return 3
    console.log("Popped: ", stack.pop());  // Should return 2
    console.log("Current stack size: ", stack.size());

    console.log("Popping remaining items...");
    console.log("Popped: ", stack.pop());  // Should return 1
    console.log("Popped: ", stack.pop());  // Should return undefined since the stack is empty
}

demoStackCollection();
