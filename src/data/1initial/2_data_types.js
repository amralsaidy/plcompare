function fetchData() {
    return {
        code_c: `
// Basic Data Type\tint, char, float, double
char
signed char
unsigned char
short
signed short
unsigned short
int
signed int
unsigned int
short int
signed short int
unsigned short int
long int
signed long int
unsigned long int
float
double
long double

// Derived Data Type
array, pointer, structure, union
// Enumeration Data Type
enum
// Void Data Type
void
`,
        code_cpp: `
// Basic Data Type\tint, char, float, double, ... etc
char
signed char
unsigned char
short
signed short
unsigned short
int
signed int
unsigned int
short int
signed short int
unsigned short int
long int
signed long int
unsigned long int
float
double
long double

// Derived Data Type
array, pointer, ... etc
// Enumeration Data Type
enum
// User Defined Data Type
structure
                `,
        code_csharp: `
// Value types
        // Simple types
                // Signed integral: 
                sbyte, short, int, long
                // Unsigned integral: 
                byte, ushort, uint, ulong
                // Unicode characters:
                char
                // IEEE binary floating-point: 
                float, double
                // High-precision decimal floating-point: 
                decimal
                // Boolean:
                bool
        // Enum types
                // User-defined types of the form 
                enum E {...}
        // Struct types
                // User-defined types of the form 
                struct S {...}
        // Nullable value types
                // Extensions of all other value types with a null value
        // Tuple value types
                // User-defined types of the form 
                (T1, T2, ...)
// Reference types
        // Class types
                // Ultimate base class of all other types:
                object
                // Unicode strings: 
                string
                // User-defined types of the form class 
                C {...}
        // Interface types
                // User-defined types of the form interface 
                I {...}
        // Array types
                // Single- and multi-dimensional, for example, 
                int[] and int[,]
        // Delegate types
                // User-defined types of the form 
                delegate int D(...)
                `,
        code_java: `
// Primitive data types - includes 
byte, short, int, long, float, double, boolean and char

// Non-primitive data types - such as 
String, Arrays, Classes, Interface, etc
                `,
        code_kotlin: `
Number
        Byte
        Short
        Int
        Long
        Float
        Double
Character    
Boolean
Array
String
                `,
        code_python: `

# Text Type:
str
# Numeric Types:
int, float, complex
# Sequence Types:
list, tuple, range
# Mapping Type:
dict
# Set Types:
set, frozenset
# Boolean Type:
bool
# Binary Types:
bytes, bytearray, memoryview
                `,
        code_js: `
// Primitive data type
// Numbers
typeof 15;  // Holding : "number"
typeof 42.7;  // Returns: "number"
typeof 2.5e-4;  // Returns: "number"
typeof Infinity;  // Returns: "number"
typeof NaN;  // Returns: "number". Despite being "Not-A-Number"
// Strings
typeof '';  // Returns: "string"
typeof 'hello';  // Returns: "string"
typeof '12';  // Returns: "string". Number within quotes is typeof string
// Booleans
typeof true;  // Returns: "boolean"
typeof false;  // Returns: "boolean"
// Undefined
typeof undefined;  // Returns: "undefined"
typeof undeclaredVariable; // Returns: "undefined"
// Null
typeof Null;  // Returns: "object"

// Non-primitive (reference) data type
// Objects
typeof {name: "John", age: 18};  // Returns: "object"
// Arrays
typeof [1, 2, 4];  // Returns: "object"
// Functions
typeof function(){};  // Returns: "function"
                `,
        code_php: `
// PHP Data Types:        
// Scalar Types
boolean
integer
float
string
// Compound Types
array
object
// Special Types
resource
NULL
                `,
    }
}

export {fetchData}