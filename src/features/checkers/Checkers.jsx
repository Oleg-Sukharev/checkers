import { useSelector } from "react-redux";
import Board from "./Board";
import Info from "./Info";
import styles from "./scss/checkers.module.scss";

const Checkers = () => {
    const { fen } = useSelector((state) => state.checkers);

    return (
        <div className={styles.wrapper}>
            <Board />
            <Info info={fen} />
        </div>
    );
};

export default Checkers;
