import React from 'react';
import renderer from 'react-test-renderer';

import App, {
    transpose,
    checkRow,
    checkRows,
    checkDiagonals,
    check,
} from './App';

test('função transpose()', () => {
    expect(transpose([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
    ])).toEqual([
        [1, 0, 0],
        [1, 0, 0],
        [1, 0, 0],
    ]);

    expect(transpose([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ])).toEqual([
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0],
    ]);

    expect(transpose([
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
    ])).toEqual([
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ]);
});

test('função checkRow()', () => {
    expect(checkRow([1, 1, 1], 1)).toEqual(true);
    expect(checkRow([1, 1, 0], 1)).toEqual(false);
    expect(checkRow([1, 1, 1], 2)).toEqual(false);
});

test('função checkRows()', () => {
    expect(checkRows([
        [1, 1, 1],
        [0, 0, 0],
        [0, 0, 0],
    ])).toEqual(1);

    expect(checkRows([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ])).toEqual(1);

    expect(checkRows([
        [0, 0, 0],
        [0, 0, 0],
        [1, 1, 1],
    ])).toEqual(1);
});

test('função checkDiagonals()', () => {
    expect(checkDiagonals([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ])).toEqual(1);

    expect(checkDiagonals([
        [0, 0, 2],
        [0, 2, 0],
        [2, 0, 0],
    ])).toEqual(2);
});

test('checar pela continuidade do jogo', () => {
    expect(check([
        [0, 1, 0],
        [0, 0, 0],
        [0, 2, 0],
    ], 6)).toEqual(0);
});

test('checar vitória', () => {
    expect(check([
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0],
    ], 6)).toEqual(1);

    expect(check([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
    ], 6)).toEqual(1);

    expect(check([
        [0, 0, 1],
        [0, 0, 1],
        [0, 0, 1],
    ], 6)).toEqual(1);
});

test('checar empate', () => {
    expect(check([
        [0, 1, 0],
        [0, 0, 0],
        [0, 2, 0],
    ], 8)).toEqual(-1);
});

test('renders correctly', () => {
    const component = renderer.create(
        <App />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
