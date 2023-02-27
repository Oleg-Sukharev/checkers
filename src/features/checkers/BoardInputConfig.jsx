import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onConfigChange } from "./checkersSlice";
import { GAME_SYMBOLS_REGEX } from "./constants/gameSymbolsRegex";
import BoardInputInfo from "./BoardInputInfo";

import styles from "./scss/boardInputConfig.module.scss";

export const BoardInputConfig = () => {
    const dispatch = useDispatch();
    const fen = useSelector((state) => state.checkers.fen);

    const handleInputChange = useCallback(
        (e) => {
            const value = e.target.value;
            if (GAME_SYMBOLS_REGEX.test(value) || !value) {
                dispatch(onConfigChange(value));
            }
        },
        [dispatch]
    );

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type="text"
                value={fen}
                onChange={handleInputChange}
                maxLength={64}
            />
            <BoardInputInfo />
        </div>
    );
};

export default BoardInputConfig;
