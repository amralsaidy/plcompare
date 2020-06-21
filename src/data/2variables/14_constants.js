function fetchData() {
    return {
        code_c: `
// 2 ways to define constant in C

// 1: C const keyword
const float PI = 3.14;  

// 2: C #define preprocessor
#define PI 3.14  
main() {  
   printf("%f",PI);  
}  
                `,
        code_cpp: `
// 2 ways to define constant in C

// 1: C const keyword
const float PI = 3.14;  

// 2: C #define preprocessor
#define PI 3.14  
main() {  
   cout << PI;  
}       
                `,
        code_csharp: `
// The example of declaring variable is given below:
int i, j;  
double d;      
float f;      
char ch;

// We can also provide values while declaring the variables as given below:
int i=2,j=4;  //declaring 2 variable of integer type      
float f=40.2;      
char ch='B'; 
                `,
        code_java: `
// There are three types of variables in Java:
// local variable
// instance variable
// static variable

class A{  
    int data=50;//instance variable  
    static int m=100;//static variable  
    void method(){  
        int n=90;//local variable  
    }  
}//end of class  
                `,
        code_kotlin: `
// Kotlin variable is declared using keyword var and val.
var language ="Java"  // var (Mutable variable)
val salary = 30000    // val (Immutable variable)
// Don't require specifying the type of variable explicitly (Type Inference)

// We can also explicitly specify the type of variable while declaring it.
val a: Int = 10  
var name: String ="amr"  
                `,
        code_python: `
# Don't require specifying the type of variable explicitly (Type Inference)
a = 10
name = 'amr'
salary = 5400.78

# Multiple Assignment
x = y = z = 50  # Assigning single value to multiple variables
a, b, c = 5, 10, 15  # Assigning multiple values to multiple variables
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
// 2 ways to define constant in php

// 1: define() function
define("MESSAGE","Hello PHP");  

// 2: const keyword
const MESSAGE="Hello PHP";  


// Magic Constants 
// ---------------
// There are nine magic constants in PHP
__LINE__
__FILE__
__DIR__
__FUNCTION__
__CLASS__
__TRAIT__
__METHOD__
__NAMESPACE__
ClassName::class
                `,
    }
}

export {fetchData}