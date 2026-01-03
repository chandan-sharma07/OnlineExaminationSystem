export const exams = [
    {
        id: 1,
        title: "React Fundamentals",
        description: "Master the core concepts of React, including hooks, components, and state management.",
        duration: 15,
        questions: 20,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        level: "Intermediate"
    },
    {
        id: 2,
        title: "JavaScript Mastery",
        description: "Deep dive into ES6+, closures, async programming, and the event loop.",
        duration: 20,
        questions: 10,
        // image removed
        level: "Advanced"
    },
    {
        id: 3,
        title: "CSS & Design",
        description: "Test your skills in Flexbox, Grid, animations, and responsive web design.",
        duration: 10,
        questions: 10,
        // image removed
        level: "Beginner"
    },
    {
        id: 4,
        title: "Data Structures & Algorithms",
        description: "Evaluate problem-solving skills with arrays, strings, stacks, queues, and basic algorithms.",
        duration: 25,
        questions: 10,
        level: "Intermediate"
    },
    {
        id: 5,
        title: "Advanced React Concepts",
        description: "Test knowledge of performance optimization, Context API, memoization, and custom hooks.",
        duration: 20,
        questions: 10,
        level: "Advanced"
    },
    {
        id: 6,
        title: "Node.js & Backend Basics",
        description: "Assess understanding of Express.js, REST APIs, middleware, and basic authentication.",
        duration: 20,
        questions: 10,
        level: "Intermediate"
    },
    {
        id: 7,
        title: "Database & MongoDB",
        description: "Check concepts of NoSQL databases, collections, schema design, and CRUD operations.",
        duration: 15,
        questions: 10,
        level: "Intermediate"
    },
];

export const questions = {
    1: [
        {
            id: 1,
            text: "What is the primary purpose of React's Virtual DOM?",
            options: [
                "To directly manipulate the browser DOM",
                "To improve performance by minimizing direct DOM manipulation",
                "To store the state of the application",
                "To handle HTTP requests"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            text: "Which command is used to create a new React application?",
            options: [
                "npm create-react-app",
                "npx create-react-app",
                "react-new-app",
                "npm install react"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            text: "What is JSX in React?",
            options: [
                "A database query language",
                "A syntax extension for JavaScript",
                "A CSS framework",
                "A React server"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            text: "Which hook is used to manage state in a functional component?",
            options: [
                "useEffect",
                "useRef",
                "useState",
                "useMemo"
            ],
            correctAnswer: 2
        },
        {
            id: 5,
            text: "What does useEffect hook replace from class components?",
            options: [
                "constructor",
                "render",
                "componentDidMount, componentDidUpdate, componentWillUnmount",
                "setState"
            ],
            correctAnswer: 2
        },
        {
            id: 6,
            text: "In React, props are __________.",
            options: [
                "Mutable",
                "Immutable",
                "Optional",
                "Global"
            ],
            correctAnswer: 1
        },
        {
            id: 7,
            text: "Which of the following is NOT a React hook?",
            options: [
                "useState",
                "useEffect",
                "useClass",
                "useContext"
            ],
            correctAnswer: 2
        },
        {
            id: 8,
            text: "What is the default behavior of React when state changes?",
            options: [
                "Reloads the page",
                "Updates only the changed component",
                "Re-renders the component",
                "Clears the DOM"
            ],
            correctAnswer: 2
        },
        {
            id: 9,
            text: "Which attribute is used instead of 'class' in JSX?",
            options: [
                "className",
                "classId",
                "cssClass",
                "htmlClass"
            ],
            correctAnswer: 0
        },
        {
            id: 10,
            text: "What is the purpose of keys in React lists?",
            options: [
                "To style list items",
                "To uniquely identify elements",
                "To sort elements",
                "To pass props"
            ],
            correctAnswer: 1
        },
        {
            id: 11,
            text: "Which hook is used for side effects?",
            options: [
                "useState",
                "useEffect",
                "useMemo",
                "useReducer"
            ],
            correctAnswer: 1
        },
        {
            id: 12,
            text: "What happens if you update state directly without setState/useState?",
            options: [
                "State updates normally",
                "Component re-renders",
                "React ignores the update",
                "App crashes"
            ],
            correctAnswer: 2
        },
        {
            id: 13,
            text: "Which method is used to pass data from parent to child?",
            options: [
                "State",
                "Props",
                "Context",
                "Reducer"
            ],
            correctAnswer: 1
        },
        {
            id: 14,
            text: "What does useRef hook mainly do?",
            options: [
                "Triggers re-render",
                "Manages lifecycle",
                "Stores mutable values without re-render",
                "Handles API calls"
            ],
            correctAnswer: 2
        },
        {
            id: 15,
            text: "What is React Fragment used for?",
            options: [
                "To create animations",
                "To group elements without extra DOM nodes",
                "To handle routing",
                "To manage state"
            ],
            correctAnswer: 1
        },
        {
            id: 16,
            text: "Which hook optimizes performance by memoizing functions?",
            options: [
                "useEffect",
                "useMemo",
                "useCallback",
                "useRef"
            ],
            correctAnswer: 2
        },
        {
            id: 17,
            text: "What is lifting state up in React?",
            options: [
                "Moving state to Redux",
                "Sharing state between sibling components",
                "Deleting state",
                "Storing state in props"
            ],
            correctAnswer: 1
        },
        {
            id: 18,
            text: "What is conditional rendering?",
            options: [
                "Rendering CSS conditionally",
                "Rendering components based on conditions",
                "Rendering only once",
                "Rendering server-side"
            ],
            correctAnswer: 1
        },
        {
            id: 19,
            text: "Which hook is used to consume Context API?",
            options: [
                "useState",
                "useEffect",
                "useContext",
                "useReducer"
            ],
            correctAnswer: 2
        },
        {
            id: 20,
            text: "What is the role of React Router?",
            options: [
                "State management",
                "Handling HTTP requests",
                "Client-side navigation",
                "Form validation"
            ],
            correctAnswer: 2
        }
    ],
    2: [
        { id: 201, text: "What is the output of the following code? console.log(typeof NaN);", options: ["\"number\"", "\"NaN\"", "\"undefined\"", "\"object\""], correctAnswer: 0 },
        { id: 202, text: "Which JavaScript feature allows a function to access variables from its outer scope even after the outer function has returned?", options: ["Hoisting", "Closure", "Scope chaining", "Callback"], correctAnswer: 1 },
        { id: 203, text: "What will be the output? console.log(0 == false);", options: ["true", "false", "TypeError", "undefined"], correctAnswer: 0 },
        { id: 204, text: "Which method converts a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "Object.parse()", "parseJSON()"], correctAnswer: 1 },
        { id: 205, text: "What does the async keyword do?", options: ["Makes the function run in parallel", "Returns a Promise", "Stops blocking the event loop", "Handles errors automatically"], correctAnswer: 1 },
        { id: 206, text: "Which statement about let and var is TRUE?", options: ["var is block scoped", "let allows redeclaration", "let is block scoped", "var throws error on hoisting"], correctAnswer: 2 },
        { id: 207, text: "What is the output? console.log([] + []);", options: ["[]", "0", "\"\"", "undefined"], correctAnswer: 2 },
        { id: 208, text: "Which function is placed in the microtask queue?", options: ["setTimeout", "setInterval", "Promise.then", "setImmediate"], correctAnswer: 2 },
        { id: 209, text: "What does the spread operator (...) do?", options: ["Copies only arrays", "Expands iterable elements", "Merges objects only", "Clones functions"], correctAnswer: 1 },
        { id: 210, text: "Which scenario best represents callback hell?", options: ["Nested function calls", "Multiple nested callbacks handling async operations", "Using promises", "Using async/await"], correctAnswer: 1 }
    ],
    3: [
        { id: 301, text: "Which CSS property is used to create a flexible layout?", options: ["float", "display: flex", "position: absolute", "inline-block"], correctAnswer: 1 },
        { id: 302, text: "Which unit is best suited for responsive typography?", options: ["px", "em", "%", "rem"], correctAnswer: 3 },
        { id: 303, text: "What does justify-content control in Flexbox?", options: ["Vertical alignment of items", "Spacing along the main axis", "Spacing along the cross axis", "Item wrapping"], correctAnswer: 1 },
        { id: 304, text: "Which CSS property enables Grid layout?", options: ["display: block", "display: flex", "display: grid", "display: inline-grid"], correctAnswer: 2 },
        { id: 305, text: "What is the purpose of media queries?", options: ["To load images", "To detect device size and apply styles", "To add animations", "To change HTML structure"], correctAnswer: 1 },
        { id: 306, text: "Which property is used to create smooth animations?", options: ["animation", "transition", "transform", "opacity"], correctAnswer: 1 },
        { id: 307, text: "What does z-index work with?", options: ["Static elements", "Flex items only", "Positioned elements", "All elements"], correctAnswer: 2 },
        { id: 308, text: "Which CSS technique is best for creating a responsive layout?", options: ["Fixed widths", "Float-based layout", "Flexbox and Grid", "Inline styles"], correctAnswer: 2 },
        { id: 309, text: "What is the default value of box-sizing?", options: ["border-box", "content-box", "padding-box", "inherit"], correctAnswer: 1 },
        { id: 310, text: "Which property is used to hide an element but keep its space?", options: ["display: none", "visibility: hidden", "opacity: 0", "overflow: hidden"], correctAnswer: 1 }
    ],
    4: [
        { id: 401, text: "Which data structure follows the FIFO principle?", options: ["Stack", "Queue", "Tree", "Graph"], correctAnswer: 1 },
        { id: 402, text: "What is the time complexity of searching an element in a balanced Binary Search Tree (BST)?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], correctAnswer: 2 },
        { id: 403, text: "Which data structure is best suited for implementing recursion?", options: ["Queue", "Array", "Stack", "Linked List"], correctAnswer: 2 },
        { id: 404, text: "What is the worst-case time complexity of linear search?", options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"], correctAnswer: 2 },
        { id: 405, text: "Which traversal technique uses a queue?", options: ["Inorder Traversal", "Preorder Traversal", "Postorder Traversal", "Level Order Traversal"], correctAnswer: 3 },
        { id: 406, text: "Which sorting algorithm has the best average-case time complexity?", options: ["Bubble Sort", "Insertion Sort", "Quick Sort", "Selection Sort"], correctAnswer: 2 },
        { id: 407, text: "What is the space complexity of an array?", options: ["O(1)", "O(log n)", "O(n)", "O(n²)", "O(n)"], correctAnswer: 2 },
        { id: 408, text: "Which data structure allows insertion and deletion at both ends?", options: ["Stack", "Queue", "Deque", "Heap"], correctAnswer: 2 },
        { id: 409, text: "What does a hash table primarily provide?", options: ["Sorted data", "Fast access using keys", "Sequential storage", "Hierarchical structure"], correctAnswer: 1 },
        { id: 410, text: "Which algorithm is used to find the shortest path in a weighted graph (non-negative weights)?", options: ["DFS", "BFS", "Dijkstra’s Algorithm", "Prim’s Algorithm"], correctAnswer: 2 }
    ],
    5: [
        { id: 501, text: "What is the main purpose of useMemo?", options: ["To memoize a function", "To memoize a computed value", "To replace useEffect", "To store mutable data"], correctAnswer: 1 },
        { id: 502, text: "When should useCallback be used?", options: ["To memoize values", "To prevent re-creation of functions on every render", "To manage side effects", "To replace Redux"], correctAnswer: 1 },
        { id: 503, text: "What problem does React.memo() solve?", options: ["State management", "Preventing unnecessary re-renders", "Handling side effects", "Routing"], correctAnswer: 1 },
        { id: 504, text: "What causes a component to re-render?", options: ["Props change", "State change", "Context change", "All of the above"], correctAnswer: 3 },
        { id: 505, text: "Which hook is used to consume Context API?", options: ["useState", "useEffect", "useContext", "useReducer"], correctAnswer: 2 },
        { id: 506, text: "What is the primary use case of useReducer?", options: ["Simple state updates", "Managing complex state logic", "Handling API calls", "Memoization"], correctAnswer: 1 },
        { id: 507, text: "What happens if dependency array is omitted in useEffect?", options: ["Runs only once", "Runs on state change only", "Runs on every render", "Throws an error"], correctAnswer: 2 },
        { id: 508, text: "Which technique improves performance in large lists?", options: ["Pagination", "Virtualization", "Memoization", "Lazy loading images"], correctAnswer: 1 },
        { id: 509, text: "What does code splitting help with?", options: ["Improving SEO", "Reducing bundle size and initial load time", "Managing state", "Styling components"], correctAnswer: 1 },
        { id: 510, text: "Why is lifting the state important?", options: ["To reduce props", "To share state between components", "To avoid re-renders", "To improve CSS"], correctAnswer: 1 }
    ],
    6: [
        { id: 601, text: "What is Node.js primarily used for?", options: ["Building UI components", "Running JavaScript on the server", "Database management", "Styling web pages"], correctAnswer: 1 },
        { id: 602, text: "Node.js is built on which JavaScript engine?", options: ["SpiderMonkey", "JavaScriptCore", "V8", "Chakra"], correctAnswer: 2 },
        { id: 603, text: "What does npm stand for?", options: ["Node Package Manager", "New Project Manager", "Node Process Module", "Network Package Manager"], correctAnswer: 0 },
        { id: 604, text: "Which module is used to create a server in Node.js?", options: ["fs", "http", "path", "os"], correctAnswer: 1 },
        { id: 605, text: "What is Express.js?", options: ["A database", "A frontend framework", "A Node.js web application framework", "A testing library"], correctAnswer: 2 },
        { id: 606, text: "What is middleware in Express.js?", options: ["A database connection", "A function that handles requests and responses", "A frontend component", "A server"], correctAnswer: 1 },
        { id: 607, text: "Which HTTP method is used to update data?", options: ["GET", "POST", "PUT", "DELETE"], correctAnswer: 2 },
        { id: 608, text: "What does res.json() do in Express?", options: ["Sends HTML response", "Converts JSON to string", "Sends a JSON response to the client", "Parses request body"], correctAnswer: 2 },
        { id: 609, text: "What is the main purpose of REST APIs?", options: ["Design UI layouts", "Enable communication between client and server", "Store data", "Handle authentication only"], correctAnswer: 1 },
        { id: 610, text: "Which status code represents a successful HTTP request?", options: ["200", "301", "404", "500"], correctAnswer: 0 }
    ],
    7: [
        { id: 701, text: "MongoDB is a ______ database.", options: ["Relational", "Hierarchical", "NoSQL", "Graph"], correctAnswer: 2 },
        { id: 702, text: "In MongoDB, data is stored in the form of:", options: ["Tables", "Rows", "Documents", "Files"], correctAnswer: 2 },
        { id: 703, text: "What is a collection in MongoDB?", options: ["A group of databases", "A group of documents", "A group of tables", "A group of indexes"], correctAnswer: 1 },
        { id: 704, text: "Which command is used to insert a document in MongoDB?", options: ["insertOne()", "add()", "create()", "push()"], correctAnswer: 0 },
        { id: 705, text: "What is the default primary key field in MongoDB?", options: ["id", "primary_id", "_key", "_id"], correctAnswer: 3 },
        { id: 706, text: "Which method is used to find all documents in a collection?", options: ["findOne()", "search()", "find()", "get()"], correctAnswer: 2 },
        { id: 707, text: "What does indexing do in MongoDB?", options: ["Reduces storage size", "Improves query performance", "Encrypts data", "Deletes duplicates"], correctAnswer: 1 },
        { id: 708, text: "Which data format does MongoDB use internally?", options: ["JSON", "XML", "BSON", "CSV"], correctAnswer: 2 },
        { id: 709, text: "Which operation updates existing data in MongoDB?", options: ["find()", "insert()", "updateOne()", "remove()"], correctAnswer: 2 },
        { id: 710, text: "What is the main advantage of MongoDB?", options: ["Strict schema enforcement", "Horizontal scalability", "Complex joins", "ACID-only transactions"], correctAnswer: 1 }
    ]
};
