import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './Footer';

test('Footer: renders correctly', () => {
    const component = renderer.create(
        <Footer
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
            onNewGame={() => { }}
        />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
