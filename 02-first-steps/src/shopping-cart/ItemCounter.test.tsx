import { describe, expect, expectTypeOf, test } from "vitest";
import { ItemCounter } from "./ItemCounter";
import { fireEvent, render, screen } from "@testing-library/react";



describe('ItemCounter', () => {
    test('should render with default values ', () => {


        const name = 'Test item';

        render(<ItemCounter name={name} />);

        expect(screen.getByText(name)).toBeDefined();
        expect(screen.getByText(name)).not.toBeNull();

    });


    test('should render with custom quantity', () => {


        const name = 'Test item';
        const quantity = 10;

        render(<ItemCounter name={name} quantity={quantity} />);

        expect(screen.getByText(quantity)).toBeDefined();
    });

    test('should increase count when +1 button is pressed ', () => {
        render(<ItemCounter name={'Test Item'} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonAdd);

        expect(screen.getByText('2')).toBeDefined();

    });


    test('should increase count when -1 button is pressed ', () => {
        render(<ItemCounter name={'Test Item'} quantity={5} />);

        const [, buttonSubtract] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('4')).toBeDefined();

    });


    test('should not decrease count when -1 button is pressed ', () => {
        render(<ItemCounter name={'Test Item'} quantity={1} />);

        const [, buttonSubtract] = screen.getAllByRole('button');
        // console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonSubtract);

        expect(screen.getByText('1')).toBeDefined();

    });

    test('should change to red when count is 1 ', () => {

        const name = 'Test item'
        render(<ItemCounter name={name} quantity={1} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('red');

    });

    test('should change to black when count is greater than  1 ', () => {

        const name = 'Test item'
        render(<ItemCounter name={name} quantity={2} />);

        const itemText = screen.getByText(name);

        expect(itemText.style.color).toBe('black');

    });

});