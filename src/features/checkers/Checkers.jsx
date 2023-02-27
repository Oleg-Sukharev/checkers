import Board from "./Board";
import BoardInputConfig from "./BoardInputConfig";
import styles from "./scss/checkers.module.scss";

const Checkers = () => {
    return (
        <div className={styles.wrapper}>
            <Board />
            <BoardInputConfig />
        </div>
    );
};

export default Checkers;
