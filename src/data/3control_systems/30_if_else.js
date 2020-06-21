function fetchData() {
    return {
        code_c: `
// if        
if(number% == 0){    
    printf("%d is even number", number);    
}   

// if ... else
if(number%2 == 0){    
    printf("%d is even number", number);    
}    
else{    
    printf("%d is odd number", number);    
}     

// if ... else if ... else
if(number == 10){    
    printf("number is equals to 10");    
}    
else if(number == 50){    
    printf("number is equal to 50");    
}   
else{    
    printf("number is not equal to 10, 50 or 100");    
}  
                `,
        code_cpp: `
// if  
if (num % 2 == 0){    
    cout<<"It is even number";    
}   

// if ... else
if (num % 2 == 0){    
    cout<<"It is even number";    
} 
else{    
    cout<<"It is odd number";    
} 
                
// if ... else if ... else                
if(number == 10){    
    cout<<"number is equals to 10";    
}    
else if(number == 50){    
    cout<<"number is equal to 50";    
}   
else{    
    cout<<"number is not equal to 10, 50 or 100";    
}  
 
                `,
        code_csharp: `
// if
if (num % 2 == 0){  
    Console.WriteLine("It is even number");  
} 

// if ... else
if (num % 2 == 0){  
    Console.WriteLine("It is even number");  
}  
else{  
    Console.WriteLine("It is odd number");  
}  

// if ... else if ... else
if(number == 10){    
    Console.WriteLine("number is equals to 10");    
}    
else if(number == 50){    
    Console.WriteLine("number is equal to 50");    
}   
else{    
    Console.WriteLine("number is not equal to 10, 50 or 100");    
}  
                `,
        code_java: `
// if
if (num % 2 == 0){  
    System.out.print("It is even number");  
} 

// if ... else
if (num % 2 == 0){  
    System.out.print("It is even number");  
}  
else{  
    System.out.print("It is odd number");  
}  

// if ... else if ... else
if(number == 10){    
    System.out.print("number is equals to 10");    
}    
else if(number == 50){    
    System.out.print("number is equal to 50");    
}   
else{    
    System.out.print("number is not equal to 10, 50 or 100");    
}  
                `,
        code_kotlin: `
// if ... else if ... else
if (age < 10) {
    println("You're too young to watch this movie")
} else if (age < 13) {
    println("You can watch this movie with a parent")
} else {
    println("You can watch this movie")
}

// if/else statement is also an expression 
// val result = if (condition) trueBody else falseBody
val result = if (age < 13) "You can watch this movie with a parent" else "You can watch this movie"
                `,
        code_python: `
// if ... else
if num % 2 == 0:  
    print("Number is even...")  
else:  
    print("Number is odd...")  

// if ... elif ...else    
if number == 10:  
    print("number is equals to 10")  
elif number == 50:  
    print("number is equal to 50");  
else:  
    print("number is not equal to 10, 50"); 
    
                `,
        code_js: `
// if ... else if ... else
if(a==10){  
    document.write("a is equal to 10");  
}  
else if(a==15){  
    document.write("a is equal to 15");  
}  
else{  
    document.write("a is not equal to 10, 15");  
}  
                `,
        code_php: `
// if ... else if(elseif) ... else
if(a == 10){  
    echo "a is equal to 10";  
}  
else if(a == 15){  
    echo "a is equal to 15";  
},
elseif(a == 20){  
    echo "a is equal to 20";  
}    
else{  
    echo "a is not equal to 10, 15 or 20";  
}         
                `,
    }
}

export {fetchData}