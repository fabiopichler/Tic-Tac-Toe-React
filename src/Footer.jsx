import React from 'react';

import { Alert, Button } from 'react-bootstrap';

const Footer = ({
    game,
    onNewGame,
}) => (
    <footer className="footer my-4">
        {game.winner > 0 ? (
            <Alert
                variant="success"
                className="text-center"
            >
                <Alert.Heading>Vitória</Alert.Heading>

                <div>Player {game.winner} ganhou o jogo</div>
            </Alert>
        ) : game.winner === -1 ? (
            <Alert
                variant="danger"
                className="text-center"
            >
                <Alert.Heading>Fim do jogo</Alert.Heading>
                
                <div>Deu empate</div>
            </Alert>
        ) : null}

        <div className="text-center mb-3">
            <Button onClick={onNewGame}>Reiniciar jogo</Button>
        </div>

        <div className="text-center text-secondary small">
            &copy; 2020 Fábio Pichler
        </div>
    </footer>
);

export default Footer;
