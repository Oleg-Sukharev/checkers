import { memo } from "react";
import { GAME_SYBMOLS, PIECE_BLACK } from "./constants/gameSymbols";
import styles from "./scss/boardInputInfo.module.scss";

export const BoardInputInfo = memo(() => {
    return (
        <div className={styles.list}>
            {GAME_SYBMOLS.map((item) => (
                <div className={styles.item} key={item.value}>
                    <span
                        className={`${styles.value} 
                ${
                    item.value.toLocaleLowerCase() === PIECE_BLACK.value
                        ? styles.black
                        : ""
                }`}
                    >
                        {item.value}
                    </span>{" "}
                    {item.label}
                </div>
            ))}
        </div>
    );
});

export default BoardInputInfo;
