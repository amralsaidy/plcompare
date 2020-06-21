function fetchData() {
    return {
        code_c: `
/* comment goes here */

/*
 * comment goes here
 */
                `,
        code_cpp: `
// This is a single one line comment

/* This is a comment */

/* C++ comments can also
 * span multiple lines
 */
                 `,
        code_csharp: `
// Single Line Comments

/* Multiline Comment -- 
   Define a variable of 
   string type and assign 
   value to it*/
   
/// 
/// XML Documentation Comments : It is a special type of comment in C# and used to create the documentation
/// 
                `,
        code_java: `
//This is single line comment  

/* 
This  
is  
multi line  
comment 
*/  

/** 
This  
is  
documentation  
comment 
*/ 
                `,
        code_kotlin: `
//This is single line comment          
        
/* This is 
 * a multi-line comment.
 */
                `,
        code_python: `
# Single-Line Comments

# Version 1 combines 
# single-line
# comments

"""
Version 2 is simpler than version 1
It's originally intended to be used for creating documentation,
but it can also be used for multi-line comments.
"""
                `,
        code_js: `
// This is a single line JavaScript comment

/* This is 
 * a multi-line comment.
 */
                `,
        code_php: `
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/
                `,
    }
}

export {fetchData}