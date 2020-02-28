import React from 'react';
import renderer from 'react-test-renderer';

import App, {
    transpose,
    checkRow,
    checkRows,
    check,
} from './App';

test('transpose', () => {
    expect(transpose([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ])).toEqual([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ]);
});

test('checkRow', () => {
    expect(checkRow([1, 1, 1], 1)).toBe(true);
    expect(checkRow([1, 1, 0], 1)).toBe(false);
});

test('checkRows', () => {
    expect(checkRows([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ])).toEqual(1);
});

test('check', () => {
    expect(check([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], 6)).toEqual(1);
});

test('renders correctly', () => {
    const component = renderer.create(
        <App />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
