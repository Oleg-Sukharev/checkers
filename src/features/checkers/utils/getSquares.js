export default function getSquares() {
    return Array.from({ length: 64 }, (_, i) => {
        return {
            position: i,
            label: Math.floor(i / 2) + 1,
            isDark: parseInt(i / 8 + i) % 2 !== 0,
        };
    });
}
