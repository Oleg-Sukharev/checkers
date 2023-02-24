import { memo } from "react";
import styles from "./scss/info.module.scss";

export const Info = memo(({ info }) => (
    <div className={styles.info}>{info}</div>
));

export default Info;
