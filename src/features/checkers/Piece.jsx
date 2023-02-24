import { memo } from "react";
import { ReactComponent as KingIcon } from "./img/king.svg";
import styles from "./scss/piece.module.scss";

export const Piece = memo(({ isKing, player }) => (
    <div className={`${styles.piece} ${!player ? "" : styles.black}`}>
        {isKing ? <KingIcon /> : null}
    </div>
));

export default Piece;
