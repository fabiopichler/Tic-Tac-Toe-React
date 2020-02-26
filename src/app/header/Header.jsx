import React from 'react';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = ({
    game,
}) => (
    <header className="header my-3">
        <h1 className="text-center">Tic Tac Toe</h1>

        <h5 className="text-center mb-0">Simples jogo da velha em React</h5>

        <div className="footer-players">
            <div className={clsx({ selected: (game.player === 1 && game.winner === 0) || game.winner === 1 })}>
                <FontAwesomeIcon
                    icon={faSun}
                    className="mr-2"
                />

                Player 1
            </div>

            <div className={clsx({ selected: (game.player === 2 && game.winner === 0) || game.winner === 2 })}>
                <FontAwesomeIcon
                    icon={faMoon}
                    className="mr-2"
                />
                
                Player 2
            </div>
        </div>
    </header>
);

export default Header;
