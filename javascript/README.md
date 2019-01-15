General
-------

### Usage

All theses rules must be enforced on every files and project in the agency.
 
However, for commodity reasons, if this document conflicts with the *eslint* configuration,
follow eslint until the config is fixed, and open an issue on the config.

### Credits

This document is heavily inspired by the [Airbnb javascript codestyle](https://github.com/airbnb/javascript)



Whitespace and global formatting
--------------------------------

### Whitespace

 * Use soft tabs (space character) set to 4 space
 * Commas must be followed by a single space (or newline) `, `
 * Semicolons must be followed by newline
 * Leading braces must be preceded by a space
 * Parenthesis of control structure must me preceded by a space 
 * Operators must be spaced before and after
 
### Alignment
 
 * Align


Types
-----

 * Quote strings with single quotes : `'` 

Constants and variables
-----------------------

### Declaration

 * Prefer `const` over `let` and `var` every time it is possible. In fact, 
use constants every time variables are not necessary 
 * Prefer `let` over `var`

### Variable names
 
 * Use `event` as variable name for events when possible
 * Use `error` as variable name for errors when possible
 * Use `exception` as variable name for exceptions when possible
 * All variables must be named using `camelCase` and not `snake_case`
 * All constants/variables must be declared with there own `const` / `let` keyword. No comma chaining. 


Functions
---------

Always use arrow functions for callbacks (when using an anonymous function)


Misc
----

### Package manager

Prefer the use of `yarn` over `npm` or any other package manager
