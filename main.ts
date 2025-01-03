/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AA278D" weight=100
namespace hello {
    //% block
    export function area(radius: number): number {
        return Math.PI * radius * radius
    }

    //% block
    export function circumference(radius: number) {
        return Math.PI * radius * 2
    }



}