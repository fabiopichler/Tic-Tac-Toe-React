import React from 'react';
import clsx from 'clsx';

import { Alert, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Footer = ({
    game,
    onNewGame,
}) => (
    <footer className="footer mb-3">
        {game.winner === 0 ? (
            <div className="footer-players">
                <div className={clsx({ selected: game.player === 1 })}>
                    <FontAwesomeIcon
                        icon={faSun}
                        className="mr-2"
                    />

                    Player 1
                </div>

                <div className={clsx({ selected: game.player === 2 })}>
                    <FontAwesomeIcon
                        icon={faMoon}
                        className="mr-2"
                    />
                    
                    Player 2
                </div>
            </div>
        ) : (
            <>
                {game.winner > 0 ? (
                    <Alert
                        variant="success"
                        className="text-center mt-3"
                    >
                        <Alert.Heading>Vitória</Alert.Heading>

                        <div>Player {game.winner} ganhou o jogo</div>
                    </Alert>
                ) : (
                    <Alert
                        variant="danger"
                        className="text-center mt-3"
                    >
                        <Alert.Heading>Fim do jogo</Alert.Heading>
                        
                        <div>Deu empate</div>
                    </Alert>
                )}
            </>
        )}

        <div className="text-center mb-3">
            <Button onClick={onNewGame}>Reiniciar jogo</Button>
        </div>

        <div className="text-center text-secondary small">
            &copy; 2020 Fábio Pichler
        </div>
    </footer>
);

export default Footer;
