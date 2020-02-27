import React from 'react';
import renderer from 'react-test-renderer';

import App, {
    transpose,
    checkRow,
    checkRows,
    check,
} from './App';

test('checkRow', () => {
    expect(checkRow([1, 1, 1], 1)).toBe(true);
    expect(checkRow([1, 1, 0], 1)).toBe(false);
});

test('renders correctly', () => {
    const component = renderer.create(
        <App />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
