# Data Structures

This repository contains implementations of various data structures in TypeScript. The data structures currently implemented are:

- Linked List
- Queue
- Stack

These implementations provide generic, reusable, and extensible data structures that can be easily integrated into TypeScript projects.

## Project Structure

The repository is organized into the following folders:

- `Common`: Contains shared components, abstract classes, and common utilities.
- `LinkedList`: Implementation of the linked list data structure.
- `Queue`: Implementation of the queue data structure and queue collections.
- `Stack`: Implementation of the stack data structure and stack collections.

## Data Structures Overview

### Linked List

The linked list is a linear data structure where each element is a separate object, known as a node. Each node contains data and a reference (or link) to the next node in the sequence.

Key Features:
- Insertion at the beginning and end of the list.
- Traversal of all nodes.
- Searching for a specific node.
- Deletion of a specified node.

### Queue

The queue is a linear data structure that follows the First-In-First-Out (FIFO) principle. The first element added to the queue is the first one to be removed.

Key Features:
- Enqueue operation to add an item to the back of the queue.
- Dequeue operation to remove an item from the front of the queue.
- Size determination.

### Stack

The stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. The last element added to the stack is the first one to be removed.

Key Features:
- Push operation to add an item to the top of the stack.
- Pop operation to remove an item from the top of the stack.
- Peek operation to view the item on top of the stack without removing it.
- Size determination.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm/yarn installed.
- TypeScript installed globally (`npm install -g typescript`).

### Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Install dependencies:
   ```sh
   yarn install
   ```
   or
   ```sh
   npm install
   ```

### Compilation

Compile the TypeScript code using the following command:
```sh
npx tsc
```

## Running Demos

There are demonstration scripts available for each data structure. Here is how you can run them:

### Linked List Demo

To run the linked list demo:
```sh
node dist/LinkedList/linkedListDemo.js
```

### Queue Demo

To run the queue demo:
```sh
node dist/Queue/queueDemo.js
```

### Stack Demo

To run the stack demo:
```sh
node dist/Stack/stackDemo.js
```

## Contributing

Contributions are welcome! If you would like to contribute to this project, please open an issue or submit a pull request.

## License

This repository is licensed under the MIT License. See the LICENSE file for more information.

