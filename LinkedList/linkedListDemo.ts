import { LinkedList } from "./linkedList";

// Program to demonstrate the functionality of the LinkedList class

const demoLinkedList = () => {
    // Create a new linked list of type number
    const linkedList = new LinkedList<number>();

    // Insert nodes at the beginning of the linked list
    console.log("Inserting nodes at the beginning...");
    linkedList.insertInBegin(10);
    linkedList.insertInBegin(20);
    linkedList.insertInBegin(30);

    // Insert nodes at the end of the linked list
    console.log("Inserting nodes at the end...");
    linkedList.insertAtEnd(40);
    linkedList.insertAtEnd(50);
    linkedList.insertAtEnd(60);

    // Traverse the linked list and print the elements
    console.log("Traversing the linked list...");
    console.log(linkedList.traverse()); // Output: [30, 20, 10, 40, 50, 60]

    // Get the size of the linked list
    console.log("Size of the linked list: " + linkedList.size()); // Output: 6

    // Search for a specific element
    console.log("Searching for node with value 20...");
    const searchResult = linkedList.search(data => data === 20);
    if (searchResult) {
        console.log("Node found: " + searchResult.data);
    } else {
        console.log("Node not found");
    }

    // Delete a node from the linked list
    console.log("Deleting the node with value 30...");
    if (searchResult) {
        linkedList.deleteNode(searchResult);
    }

    // Traverse the linked list after deletion
    console.log("Traversing the linked list after deletion...");
    console.log(linkedList.traverse()); // Output: [20, 10, 40, 50, 60]

    // Get the updated size of the linked list
    console.log("Updated size of the linked list: " + linkedList.size()); // Output: 5
};

demoLinkedList();
