"use strict";

var range = require('array-range'), 
shuffle = require( 'shuffle-array' )
/**
 * Strip whitespace - or other characters - from the end of a string
 *
 * @param  {String} str   Input string
 * @param  {String} chars Character(s) to strip [optional]
 * @return {String} str   Modified string
 */

module.exports = add

 function add( str, chars ) {

    // Convert to string
    str = str.toString();

    // Empty string?
    if ( ! str ) {
        return '';
    }

    // Remove whitespace if chars arg is empty
    if ( ! chars ) {
        return str.replace( /\s+$/, '' );
    }

    // Convert to string
    chars = chars.toString();

    // Set vars
    var letters = str.split( '' ),
        i = letters.length - 1;

    // Loop letters
    for ( i; i >= 0; i -- ) {
        if ( chars.indexOf( letters[i] ) === -1 ) {
            return str.substring( 0, i + 1 );
        }
    }

    return str;

};


add('    Hello World    ')

var chars = []
range( 32, 65 ).concat( [91, 92, 93, 94, 95, 96, 123, 124, 125, 126] )
.forEach( function( _ ) {
    chars.push( String.fromCharCode( _ ) );
} );

 console.log( range(1,4) )
 console.log( range(1,4) )