import React from 'react';

import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Board = ({
    game,
    click,
}) => (
    <main className="board">
        <section className="board-container">
            {game.board.map((row, rowIndex) => (
                <Row
                    className="board-row"
                    key={rowIndex}
                >
                    {row.map((col, colIndex) => (
                        <Col
                            onClick={() => click(col, rowIndex, colIndex)}
                            className="board-col"
                            key={`${rowIndex}${colIndex}`}
                        >
                            {col === 1 ? (
                                <FontAwesomeIcon
                                    icon={faSun}
                                    className="board-player-icon player-1 text-warning"
                                />
                            ) : col === 2 ? (
                                <FontAwesomeIcon
                                    icon={faMoon}
                                    className="board-player-icon player-2 text-info"
                                />
                            ) : null}
                        </Col>
                    ))}
                </Row>
            ))}
        </section>
    </main>
);

export default Board;
