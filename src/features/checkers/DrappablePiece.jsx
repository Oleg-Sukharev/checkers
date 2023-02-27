import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import Piece from "./Piece";

const DrappablePiece = memo(({ position, isKing, player }) => {
    return (
        <Draggable draggableId={position.toString()} index={position}>
            {(provided, snapshot) => (
                <div
                    role="button"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                        ...provided.draggableProps.style,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Piece
                        isKing={isKing}
                        isDragging={snapshot.isDragging}
                        player={player}
                    />
                </div>
            )}
        </Draggable>
    );
});

export default DrappablePiece;
