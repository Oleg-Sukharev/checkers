import { memo, forwardRef } from "react";
import styles from "./scss/square.module.scss";

const Square = memo(
    forwardRef(
        (
            {
                isDark,
                children,
                position,
                label,
                isDraggingOver,
                ...otherProps
            },
            ref
        ) => {
            return (
                <div
                    ref={ref}
                    {...otherProps}
                    className={`${styles.square} ${isDark ? styles.dark : ""} ${
                        isDraggingOver ? styles.dragOver : ""
                    }`}
                >
                    {isDark ? (
                        <span className={styles.position}>{label}</span>
                    ) : null}
                    {children}
                </div>
            );
        }
    )
);

export default Square;
