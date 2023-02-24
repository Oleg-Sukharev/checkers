import { memo } from "react";
import { Droppable } from "react-beautiful-dnd";
import DrappablePiece from "./DrappablePiece";
import Square from "./Square";

export const DroppableSquare = memo(({ position, piece, isDark, label }) => (
    <Droppable
        droppableId={`square-${position}`}
        isDropDisabled={!!piece}
        // isDropDisabled={!isDark}
    >
        {(provided, snapshot) => (
            <Square
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDark={isDark}
                position={position}
                isDraggingOver={snapshot.isDraggingOver}
                label={label}
            >
                {piece ? (
                    <DrappablePiece {...piece} position={position} />
                ) : null}
                <span style={{ display: "none" }}>{provided.placeholder}</span>
            </Square>
        )}
    </Droppable>
));

export default DroppableSquare;
