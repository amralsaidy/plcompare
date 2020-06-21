let languages = [
    {"id": "c", "title": "C"},
    {"id": "cpp", "title": "C++"},
    {"id": "csharp", "title": "C#"},
    {"id": "java", "title": "Java"},
    {"id": "kotlin", "title": "Kotlin"},
    {"id": "python", "title": "Python"},
    {"id": "js", "title": "JavaScript"},
    {"id": "php", "title": "PHP"}
]

let contents = [
    // {value: null, text: 'Please select an content'},
    {
        label: 'Initial',
        options: [
            {value: 1, text: 'Keywords'},
            {value: 2, text: 'Data Types'},
            {value: 3, text: 'Comments'}]
    },
    {
        label: 'Variables',
        options: [
            {value: 11, text: 'Declaration'},
            {value: 12, text: 'Type Casting'},
            {value: 13, text: 'Scope'},
            {value: 14, text: 'Constants'},
            {value: 15, text: 'Operators'}
        ]
    },
    {
        label: 'Control Systems',
        options: [
            {value: 30, text: 'If..else'},
            {value: 31, text: 'Ternary Operator'},
            {value: 32, text: 'Switch'},
            {value: 33, text: 'When (Kotlin)'},
            {value: 34, text: 'For Loop'},
            {value: 35, text: 'Foreach loop'},
            {value: 36, text: 'For..in (Python)'},
            {value: 37, text: 'For..in (JavaScript)'},
            {value: 38, text: 'While Loop'},
            {value: 39, text: 'Do While'}
        ]
    },
    {
        label: 'Arrays',
        options: [
            {value: 50, text: 'Arrays'},
            {value: 51, text: 'Indexed Arrays'},
            {value: 52, text: 'Associative Arrays (PHP)'},
            {value: 53, text: 'Multidimensional Arrays'},
            {value: 54, text: 'Lists (Python)'},
            {value: 55, text: 'Tuples (Python)'},
            {value: 56, text: 'Dictionaries (Python)'},
            {value: 57, text: 'Sets (Python)'},
            {value: 58, text: 'Strings'}
        ]
    },
    {
        label: 'Functions',
        options: [
            {value: 70, text: 'Definitions'},
            {value: 71, text: 'Parameters'},
            {value: 72, text: 'Invocation'},
            {value: 73, text: 'Call'},
            {value: 74, text: 'Closures'},
            {value: 75, text: 'Call By Value'},
            {value: 76, text: 'Call By Reference'},
            {value: 77, text: 'Default Arguments'},
            {value: 78, text: 'Variable Arguments'},
            {value: 79, text: 'Anonymous Function'},
        ]
    },
    {
        label: 'Object Oriented Programming',
        options: [
            {value: 90, text: 'Classes'},
            {value: 91, text: 'Objects'},
            {value: 92, text: 'Classes (JavaScript)'},
            {value: 93, text: 'Objects (JavaScript)'},
            {value: 94, text: 'Constructors'},
            {value: 95, text: 'Inheritance'},
            {value: 96, text: 'Overloading'},
            {value: 97, text: 'Overriding (Java)'},
            {value: 98, text: 'Polymorphism'},
            {value: 99, text: 'Abstraction'},
            {value: 100, text: 'Encapsulation'},
            {value: 101, text: 'Interfaces'},
        ]
    },
    {
        label: 'Exception Handling',
        options: [
            {value: 0, text: 'TryCatch'},
            {value: 0, text: 'TryExcept '},
        ]
    },
    {
        label: 'Advanced',
        options: [
            {value: 120, text: 'Files'},
            {value: 121, text: 'Streams'},
            {value: 122, text: 'Multithreading'},
            {value: 123, text: 'Pointers (c/c++)'},
            {value: 124, text: 'Attributes'},
            {value: 125, text: 'Reflection'},
            {value: 126, text: 'Properties'},
            {value: 127, text: 'Indexers'},
            {value: 128, text: 'Delegates (C#)'},
            {value: 129, text: 'Events'},
            {value: 130, text: 'Collections'},
            {value: 131, text: 'Generics'},
            {value: 132, text: 'Regular Expressions'},
            {value: 133, text: 'Lambda Expressions'},
            {value: 134, text: 'Serialization'},
            {value: 135, text: 'Annotations (Java)'},
            {value: 136, text: 'Interfaces'},
        ]
    },
]


export {languages}
export {contents}