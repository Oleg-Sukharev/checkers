import { createSlice } from "@reduxjs/toolkit";
import getSquares from "./utils/getSquares";
import { EMPTY_SQUARE } from "./constants/emptySquare";

const FEN_DEFAULT =
    ".w.w.w....w......W.b.W.............B..........b....b....b.......";
// const FEN_DEFAULT = ".w.b..............................................................";

const initialState = {
    fen: FEN_DEFAULT,
    squares: getSquares(),
};

export const checkersSlice = createSlice({
    name: "checkers",
    initialState,
    reducers: {
        onEndMovement: (state, action) => {
            const { currentPosition, newPosition } = action.payload;
            const fenArr = state.fen.split("");
            fenArr[newPosition] = fenArr[currentPosition];
            fenArr[currentPosition] = EMPTY_SQUARE;
            state.fen = fenArr.join("");
        },
    },
});

export const { onEndMovement } = checkersSlice.actions;

export default checkersSlice.reducer;
