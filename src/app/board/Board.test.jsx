import React from 'react';
import renderer from 'react-test-renderer';

import Board from './Board';

test('Board: renders correctly', () => {
    const component = renderer.create(
        <Board
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
            click={() => { }}
        />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
