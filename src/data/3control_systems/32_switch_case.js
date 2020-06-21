function fetchData() {
    return {
        code_c: `
switch(number){    
    case 10:    
        printf("number is equals to 10");    
        break;    
    case 50:    
        printf("number is equal to 50");    
        break;    
    case 100:    
        printf("number is equal to 100");    
        break;    
    default:    
        printf("number is not equal to 10, 50 or 100");    
}
                `,
        code_cpp: `
switch(number){    
    case 10:    
        cout<<"number is equals to 10";    
        break;    
    case 50:    
        cout<<"number is equal to 50";    
        break;    
    case 100:    
        cout<<"number is equal to 100";    
        break;    
    default:    
        cout<<"number is not equal to 10, 50 or 100";    
}
                `,
        code_csharp: `
switch(number){    
    case 10:    
        Console.WriteLine("number is equals to 10");    
        break;    
    case 50:    
        Console.WriteLine("number is equal to 50");    
        break;    
    case 100:    
        Console.WriteLine("number is equal to 100");    
        break;    
    default:    
        Console.WriteLine("number is not equal to 10, 50 or 100");    
}
                `,
        code_java: `
switch(number){    
    case 10:    
        System.out.println("number is equals to 10");    
        break;    
    case 50:    
        System.out.println("number is equal to 50");    
        break;    
    case 100:    
        System.out.println("number is equal to 100");    
        break;    
    default:    
        System.out.println("number is not equal to 10, 50 or 100");    
}
                `,
        code_kotlin: `
// Kotlin doesn't have a switch/case statement

                `,
        code_python: `
# Python doesn't have a switch/case statement
                `,
        code_js: `
switch(number){    
    case 10:    
        document.write("number is equals to 10");    
        break;    
    case 50:    
        document.write("number is equal to 50");    
        break;    
    case 100:    
        document.write("number is equal to 100");    
        break;    
    default:    
        document.write("number is not equal to 10, 50 or 100");    
}
                `,
        code_php: `
switch($number){    
    case 10:    
        echo("number is equals to 10");    
        break;    
    case 50:    
        echo("number is equal to 50");    
        break;    
    case 100:    
        echo("number is equal to 100");    
        break;    
    default:    
        echo("number is not equal to 10, 50 or 100");    
}
                `,
    }
}

export {fetchData}