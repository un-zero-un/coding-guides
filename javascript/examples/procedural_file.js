/*
 * Exemple of a simple JS file without Class and / or modules defined.
 *
 * Good'ol Vanilla JS File
 */

function onAdderClick(e) {
    // Valid
    const validVariable = 'valid string';
    const otherValidVariable = .2;

    // IInvalid
    const invalid_variable     = 'invalid',
          otherInvalidVariable = 'invalid string';

    // Valid
    let aThirdValidVariable = 1;
    // …
    aThirdValidVariable = 3;


    // Invalid (never reassigned)
    let invalidVariable = 1;

}

// Next line is invalid due to lack of semicolon
console.log('No semicolon')

document.addEventListener('DOMContentLoaded', () => {

});
