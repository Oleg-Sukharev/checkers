import { useCallback, useMemo } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { onEndMovement } from "./checkersSlice";
import DroppableSquare from "./DroppableSquare";
import getPieces from "./utils/getPieces";
import styles from "./scss/board.module.scss";

const Board = () => {
    const dispatch = useDispatch();
    const { squares, fen } = useSelector((state) => state.checkers);
    const pieces = useMemo(() => getPieces(fen), [fen]);

    const handleDragEnd = useCallback(
        ({ destination, source }) => {
            if (
                !destination ||
                !source ||
                (destination.droppableId === source.droppableId &&
                    destination.index === source.index)
            )
                return;

            const [, currentPosition] = source.droppableId.split("-");
            const [, newPosition] = destination.droppableId.split("-");

            dispatch(
                onEndMovement({
                    currentPosition,
                    newPosition,
                })
            );
        },
        [dispatch]
    );

    return (
        <div className={styles.board}>
            <DragDropContext onDragEnd={handleDragEnd}>
                {squares.map((square) => (
                    <DroppableSquare
                        isDark={square.isDark}
                        piece={pieces.find(
                            (piece) =>
                                Number(piece.position) === square.position
                        )}
                        key={`square-${square.position}`}
                        position={square.position}
                        label={square.label}
                    />
                ))}
            </DragDropContext>
        </div>
    );
};

export default Board;
