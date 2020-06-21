function fetchData() {
    return {
        code_c: `
// Local Variable
void function1(){  
    int x = 10; //local variable  
}  

// Global Variable
int value = 20; //global variable  
    void function1(){  
    int x = 10; //local variable  
}  

// Static Variable
void function1(){  
    int x = 10; //local variable  
    static int y = 10; //static variable  
    x = x + 1;  
    y = y + 1;  
    printf("%d, %d", x, y);  
}  

//Automatic Variable
void main(){  
    int x = 10; //local variable (also automatic)  
    auto int y = 20; //automatic variable  
} 
 
// External Variable
// myfile.h
extern int x = 10; //external variable (also global)  
// program1.c
#include "myfile.h"  
void printValue(){  
    printf("Global variable: %d", global_variable);  
}  
                `,
        code_cpp: `
// Local Variable
void func() 
{    
    // this variable is local to the 
    // function func() and cannot be  
    // accessed outside this function 
    int age=18;  
    cout << age; 
} 
int main() 
{ 
    cout << "Age is: "; 
    func();       
    return 0; 
} 

// Global Variable 
int global = 5; 
void display() 
{ 
    cout<<global<<endl; 
} 
int main() 
{ 
    display();       
    // changing value of global 
    // variable from main function 
    global = 10; 
    display(); 
} 
                `,
        code_csharp: `
// Class Level Scope
Example:
class Class1 {    
    // class level scope 
    int a = 10;   
    public void display(){ 
        // accessing class level variable 
        Console.WriteLine(a); 
    }  
}

// Method Level Scope
class Class2 {
    // class level scope  
    public void display(){ 
        // method level scope 
        int m = 47;   
        // accessing method level variable 
        Console.WriteLine(m);   
    } 
    public void display1(){ 
        // method level scope   
        // it will give compile time error as you are trying to access the local variable of method display() 
        Console.WriteLine(m);  
    }
}

// Block Level Scope
class Class3 { 
    // from here class level scope starts   
    public void display(){ 
        // method level scope 
        int i = 0;   
        for (i = 0; i < 4; i++) {   
            // accessing method level variable 
            Console.WriteLine(i); 
        }   
        // here j is block level variable it is only accessible inside this for loop 
        for (int j = 0; j < 5; j++) { 
            // accessing block level variable 
            Console.WriteLine(j); 
        }   
        // this will give error as block level variable can't be accessed outside the block 
        Console.WriteLine(j);  
    }  
} 
 
                `,
        code_java: `
// Member Variables (Class Level Scope)
public class Test
{
    // All variables defined directly inside a class 
    // are member variables
    int a;
    private String b
    void method1() {....}
    int method2() {....}
    char c;
}

// Local Variables (Method Level Scope)
public class Test
{
    void method1() 
    {
       // Local variable (Method level scope)
       int x;
    }
}

// Loop Variables (Block Scope)
public class Test 
{ 
    public static void main(String args[]) 
    { 
      for (int x = 0; x < 4; x++) 
        { 
            System.out.println(x); 
        }   
        // Will produce error 
        System.out.println(x);
    } 
} 

// Above program after correcting the error 
class Test 
{ 
    public static void main(String args[]) 
    { 
        int x; 
        for (x = 0; x < 4; x++) 
        { 
            System.out.println(x); 
        } 
  
       System.out.println(x); 
    } 
}

                `,
        code_kotlin: `
not filled 
                `,
        code_python: `
not filled
                `,
        code_js: `
not filled
                `,
        code_php: `
not filled
                `,
    }
}

export {fetchData}