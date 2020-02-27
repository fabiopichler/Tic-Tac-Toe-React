import React from 'react';

import Header from './header/Header';
import Board from './board/Board';
import Footer from './footer/Footer';

export const transpose = board => board[0].map((col, i) => board.map(row => row[i]));

export const checkRow = (row, player) => row.filter(col => col === player).length === 3;

export const checkRows = board => {
    for (const row of board)
        for (let player = 1; player <= 2; ++player)
            if (checkRow(row, player))
                return player;

    return 0;
}

export const checkDiagonals = board => {
    const diagonals = [[], []];

    for (const index in board) {
        diagonals[0].push(board[index][index]);
        diagonals[1].push(board[index][(board.length - 1) - index]);
    }

    return checkRows(diagonals);
}

export const check = (board, round) => {
    let player = checkRows(board);

    if (player === 0)
        player = checkRows(transpose(board));

    if (player === 0)
        player = checkDiagonals(board);

    if (player > 0)
        return player;

    if (player === 0 && round === 8)
        return -1;

    return 0;
}

const setupGame = () => ({
    player: 1,
    round: 0,
    winner: 0,
    board: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
});

const App = () => {
    const [game, setGame] = React.useState(setupGame());

    const newGame = () => setGame(setupGame());

    const click = (col, rowIndex, colIndex) => {
        if (col !== 0 || game.winner !== 0)
            return;

        setGame(game => {
            const board = [...game.board];
            board[rowIndex][colIndex] = game.player;

            const winner = check(board, game.round);

            return {
                player: game.player === 1 ? 2 : 1,
                round: game.round + 1,
                winner,
                board,
            };
        });
    };

    return (
        <>
            <Header game={game} />

            <Board
                game={game}
                click={click}
            />

            <Footer
                game={game}
                onNewGame={newGame}
            />
        </>
    );
};

export default App;
