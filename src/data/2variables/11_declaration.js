function fetchData() {
    return {
        code_c: `
//The example of declaring variable is given below:
int i, j;  
double d;      
float f;      
char ch;      

// We can also provide values while declaring the variables as given below:
int i=2,j=4;  //declaring 2 variable of integer type      
float f=40.2;      
char ch='B'; 
                `,
        code_cpp: `
//The example of declaring variable is given below:
int i, j;  
double d;      
float f;      
char ch;      

// We can also provide values while declaring the variables as given below:
int i=2,j=4;  //declaring 2 variable of integer type      
float f=40.2;      
char ch='B'; 
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
// PHP $ and $$ Variables

// The $var (single dollar) is a normal variable with the name var that stores any value like string, integer, float, etc.
$str = "hello string";  
$x = 200;  
$y = 44.6; 
echo $str." ";  
echo $x." ";  
echo $y;
// Output: hello string 200 44.6 
 
// The $$var (double dollar) is a reference variable that stores the value of the $variable inside it.
$x = "abc";  
$$x = 200;  
echo $x." ";  
echo $$x." ";  
echo $abc;  
// Output: abc 200 200
                `,
    }
}

export {fetchData}