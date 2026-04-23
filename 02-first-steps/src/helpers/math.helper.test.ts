
import { describe, test, expect } from 'vitest';
import { add, subtract, multiply, divide } from './main.helpers';

describe('add', () => {
    test('should add two positive numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    });

    test('should add two positive numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = add(a, b);

        // ! 3. Assert
        expect(result).toBe(a + b);
    });
});


describe('subtract', () => {
    test('should subtract two positive numbers', () => {
        // ! 1. Arrange
        const a = 2;
        const b = 4;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b);
    });

    test('should subtract two negative numbers', () => {
        // ! 1. Arrange
        const a = -2;
        const b = -4;

        // ! 2. Act
        const result = subtract(a, b);

        // ! 3. Assert
        expect(result).toBe(a - b);
    });

});

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        // ! 1. Arrange
        const a = 1;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(a * b);
    });

    test('should multiply two positive numbers', () => {
        // ! 1. Arrange
        const a = -1;
        const b = 2;

        // ! 2. Act
        const result = multiply(a, b);

        // ! 3. Assert
        expect(result).toBe(a * b);
    });


    test('should divide two positive numbers', () => {
        // ! 1. Arrange
        const a = 2;
        const b = 4;

        // ! 2. Act
        const result = divide(a, b);

        // ! 3. Assert
        expect(result).toBe(a / b);
    });
});