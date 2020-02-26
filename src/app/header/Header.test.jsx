import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

test('Header: renders correctly', () => {
    const component = renderer.create(
        <Header
            game={{
                player: 1,
                round: 0,
                winner: 0,
                board: [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0],
                ],
            }}
        />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
