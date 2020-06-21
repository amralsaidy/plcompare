function fetchData() {
    return {
        code_c: `
// Implicit Type Conversion / Automatic Type Conversion
int x;
{
    printf("%c", x);   /*Implicit casting from int to char thanks to %c*/
}

// Explicit Type Conversion
int x;
{
    printf("%c", (char)x);   /*Explicit casting from int to char*/
}
                `,
        code_cpp: `
// Implicit Type Conversion / Automatic Type Conversion
int main() 
{ 
    int x = 10; // integer x 
    char y = 'a'; // character c   
    // y implicitly converted to int. ASCII 
    // value of 'a' is 97 
    x = x + y;   
    // x is implicitly converted to float 
    float z = x + 1.0;   
    cout << "x = " << x << endl 
         << "y = " << y << endl 
         << "z = " << z << endl;   
    return 0; 
} 

// Explicit Type Conversion
int main() 
{ 
    double x = 1.2;   
    // Explicit conversion from double to int 
    int sum = (int)x + 1;   
    cout << "Sum = " << sum; 
    return 0; 
} 

// Conversion using Cast operator
// C++ supports four types of casting:
// 1-Static Cast
// 2-Dynamic Cast
// 3-Const Cast
// 4-Reinterpret Cast
int main() 
{ 
    float f = 3.5;   
    // using cast operator 
    int b = static_cast<int>(f);   
    cout << b; 
} 
                `,
        code_csharp: `
// Implicit Casting (automatically) - converting a smaller type to a larger type size
// char -> int -> long -> float -> double
int myInt = 9;
double myDouble = myInt;       // Automatic casting: int to double
Console.WriteLine(myInt);      // Outputs 9
Console.WriteLine(myDouble);   // Outputs 9

// Explicit Casting (manually) - converting a larger type to a smaller size type
// double -> float -> long -> int -> char
double myDouble = 9.78;
int myInt = (int) myDouble;    // Manual casting: double to int
Console.WriteLine(myDouble);   // Outputs 9.78
Console.WriteLine(myInt);      // Outputs 9

// Type Conversion Methods
// Convert.ToBoolean, Convert.ToDouble, Convert.ToString, Convert.ToInt32(int) , Convert.ToInt64(long)
int myInt = 10;
double myDouble = 5.25;
bool myBool = true;
Console.WriteLine(Convert.ToString(myInt));    // convert int to string
Console.WriteLine(Convert.ToDouble(myInt));    // convert int to double
Console.WriteLine(Convert.ToInt32(myDouble));  // convert double to int
Console.WriteLine(Convert.ToString(myBool));   // convert bool to string
                `,
        code_java: `
// Widening Casting (automatically) - converting a smaller type to a larger type size
// byte -> short -> char -> int -> long -> float -> double
public class MyClass {
  public static void main(String[] args) {
    int myInt = 9;
    double myDouble = myInt; // Automatic casting: int to double

    System.out.println(myInt);      // Outputs 9
    System.out.println(myDouble);   // Outputs 9.0
  }
}

// Narrowing Casting (manually) - converting a larger type to a smaller size type
// double -> float -> long -> int -> char -> short -> byte
public class MyClass {
  public static void main(String[] args) {
    double myDouble = 9.78;
    int myInt = (int) myDouble; // Manual casting: double to int

    System.out.println(myDouble);   // Outputs 9.78
    System.out.println(myInt);      // Outputs 9
  }
}
                `,
        code_kotlin: `
// Implicit Conversion 
// In Kotlin, implicit conversion of smaller data type into larger data type is not supported

// Explicit Conversion
// Conversion is done by explicit in which smaller data type is converted into larger data type and vice-versa 
// This is done by using helper function.
toByte()
toShort()
toInt()
toLong()
toFloat()
toDouble()
toChar()

// Convert from Int to Long.
fun main(args : Array<String>) {  
    var value1 = 100  
    val value2: Long =value1.toLong()  
    println(value2)  
}  

// Convert from larger data type to smaller data type.
fun main(args : Array<String>) {  
    var value1: Long = 200  
    val value2: Int =value1.toInt()  
    println(value2)  
}  
                `,
        code_python: `
# Implicit Type Conversion

 # Example: Converting integer to float
num_int = 123
num_flo = 1.23
num_new = num_int + num_flo
print("datatype of num_int:", type(num_int)) # datatype of num_int: <class 'int'>
print("datatype of num_flo:", type(num_flo)) # datatype of num_flo: <class 'float'>
print("Value of num_new:", num_new)          # Value of num_new: 124.23
print("datatype of num_new:", type(num_new)) # datatype of num_new: <class 'float'>

 # Example: Addition of string(higher) data type and integer(lower) datatype
num_int = 123
num_str = "456"
print("Data type of num_int:", type(num_int)) # Data type of num_int: <class 'int'> 
print("Data type of num_str:", type(num_str)) # Data type of num_str: <class 'str'> 
print(num_int + num_str)                      # TypeError: unsupported operand type(s) for +: 'int' and 'str'

# Explicit Type Conversion
 # Example: Addition of string and integer using explicit conversion
num_int = 123
num_str = "456"
print("Data type of num_int:", type(num_int))                     # Data type of num_int: <class 'int'>
print("Data type of num_str before Type Casting:", type(num_str)) # Data type of num_str before Type Casting: <class 'str'>
num_str = int(num_str)
print("Data type of num_str after Type Casting:", type(num_str))  # Data type of num_str after Type Casting: <class 'int'>
num_sum = num_int + num_str
print("Sum of num_int and num_str:", num_sum)                     # Sum of num_int and num_str: 579
print("Data type of the sum:", type(num_sum))                     # Data type of the sum: <class 'int'>
                `,
        code_js: `
var a = 10;  
var name = 'amr';  

// JavaScript global variable & Local variable
var data = 200; // global variable  
function abc(){  
    var x = 10; // local variable  
    If(x < 13){  
        document.writeln(data);
        var y = 20; // local variable  
    }  
}  

// Declaring JavaScript global variable within function can be accessed from any function
function m(){  
    window.value = 100; // declaring global variable by window object  
}  
function n(){  
    alert(window.value); // accessing global variable from other function  
}  
                `,
        code_php: `
function writeMsg() {
  echo "Hello world!";
}
writeMsg(); // call the function
                `,
    }
}

export {fetchData}