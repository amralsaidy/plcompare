function fetchData() {
    return {
        code_c: `
// A list of 32 keywords in the c language is given below:       
auto\tbreak tcase\tchar\tconst\tcontinue\tdefault\tdo
double\telse\tenum\textern\tfloat\tfor\tgoto\tif
int\tlong\tregister\treturn\tshort\tsigned\tsizeof\tstatic
struct\tswitch\ttypedef\tunion\tunsigned\tvoid\tvolatile\twhile
                `,
        code_cpp: `
// Language which are also available in C language are given below.
auto\tbreak\tcase\tchar\tconst\tcontinue\tdefault\tdo
double\telse\tenum\textern\tfloat\tfor\tgoto\tif
int\tlong\tregister\treturn\tshort\tsigned\tsizeof\tstatic
struct\tswitch\ttypedef\tunion\tunsigned\tvoid\tvolatile\twhile

// A list of 30 Keywords in C++ Language which are not available in C language are given below.
asm\tdynamic_cast\tnamespace\treinterpret_cast\tbool
explicit\tnew\tstatic_cast\tfalse\tcatch
operator\ttemplate\tfriend\tprivate\tclass
this\tinline\tpublic\tthrow\tconst_cast
delete\tmutable\tprotected\ttrue\ttry
typeid\ttypename\tusing\tvirtual\twchar_t
                `,
        code_csharp: `
// A list of Reserved Keywords available in C# programming language is given below:
abstract\tbase\tas\tbool\tbreak\tcatch\tcase
byte\tchar\tchecked\tclass\tconst\tcontinue\tdecimal
private\tprotected\tpublic\treturn\treadonly\tref\tsbyte
explicit\textern\tfalse\tfinally\tfixed\tfloat\tfor
foreach\tgoto\tif\timplicit\tin\tin (generic modifier)\tint
ulong\tushort\tunchecked\tusing\tunsafe\tvirtual\tvoid
null\tobject\toperator\tout\tout (generic modifier)\toverride\tparams
default\tdelegate\tdo\tdouble\telse\tenum\tevent
sealed\tshort\tsizeof\tstackalloc\tstatic\tstring\tstruct
switch\tthis\tthrow\ttrue\ttry\ttypeof\tuint
abstract\tbase\tas\tbool\tbreak\tcatch\tcase
volatile\twhile\t\t\t\t

// Some identifiers which have special meaning in context of code are called as Contextual Keywords.
// A list of Contextual Keywords available in C# programming language is given below:
add\tgroup\tascending\tdescending\tdynamic\tfrom\tget
global\talias\tinto\tjoin\tlet\tselect\tset
partial (type)\tpartial(method)\tremove\torderby
                `,
        code_java: `
// A list of Java keywords or reserved words are given below:
abstract\tcontinue\tfor\tnew\tswitch
assert***\tdefault\tgoto*\tpackage\tsynchronized
boolean\tdo\tif\tprivate\tthis
break\tdouble\timplements\tprotected\tthrow
byte\telse\timport\tpublic\tthrows
case\tenum****\tinstanceof\treturn\ttransient
catch\textends\tint\tshort\ttry
char\tfinal\tinterface\tstatic\tvoid
class\tfinally\tlong\tstrictfp**\tvolatile
const*\tfloat\tnative\tsuper\twhile

// *\t \tnot used
// **\t \tadded in 1.2
// ***\t \tadded in 1.4
// ****\t \tadded in 5.0
                `,
        code_kotlin: `
// Hard Keywords
as\tas?\tbreak\tclass\tcontinue
do\telse\tfalse\tfor\tfun\tif
in\t!in\tinterace\tis\t!is
null\tobject\tpackage\treturn
super\tthis\tthrow\ttrue\ttry
typealias\ttypeof\tval\tvar
when\twhile

// Soft Keywords
by\tcatch\tconstructor\tdelegate
dynamic\tfield\tfile\tfinally\tget
import\tinit\tparam\tproperty
receiver\tset\tsetparam\twhere
                `,
        code_python: `
and\tas\tassert\tbreak\tclass
continue\tdef\tdel\telif\telse
except\tFalse\tfinally\tfor\tfrom
global\tif\timport\tin\tis\tlambda
None\tnonlocal\tnot\tor\tpass\traise
return\ttry\tTrue\twhile\twith\tyield
                `,
        code_js: `
abstract\targuments\tawait*\tboolean
break\tbyte\tcase\tcatch
char\tclass*\tconst\tcontinue
debugger\tdefault\tdelete\tdo
double\telse\tenum*\teval
export*\textends*\tfalse\tfinal
finally\tfloat\tfor\tfunction
goto\tif\timplements\timport*
in\tinstanceof\tint\tinterface
let*\tlong\tnative\tnew
null\tpackage\tprivate\tprotected
public\treturn\tshort\tstatic
super*\tswitch\tsynchronized\tthis
throw\tthrows\ttransient\ttrue
try\ttypeof\tvar\tvoid
volatile\twhile\twith\tyield
// Words marked with* are new in ECMAScript 5 and 6.

// Removed reserved words from the ECMAScript 5/6 standard
abstract\tboolean\tbyte\tchar
double\tfinal\tfloat\tgoto
int\tlong\tnative\tshort
synchronized\tthrows\ttransient\tvolatile
                `,
        code_php: `
//
__halt_compiler()\tabstract\tand\tarray()\tas
break\tcallable (as of PHP 5.4)\tcase\tcatch\tclass
clone\tconst\tcontinue\tdeclare\tdefault
die()\tdo\techo\telse\telseif
empty()\tenddeclare\tendfor\tendforeach\tendif
endswitch\tendwhile\teval()\texit()\textends
final\tfinally (as of PHP 5.5)\tfor\tforeach\tfunction
global\tgoto (as of PHP 5.3)\tif\timplements\tinclude
include_once\tinstanceof\tinsteadof (as of PHP 5.4)\tinterface\tisset()
list()\tnamespace (as of PHP 5.3)\tnew\tor\tprint
private\tprotected\tpublic\trequire\trequire_once
return\tstatic\tswitch\tthrow\ttrait (as of PHP 5.4)
try\tunset()\tuse\tvar\twhile
                `,
    }
}

export {fetchData}