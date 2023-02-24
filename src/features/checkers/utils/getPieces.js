const configPiece = (value, position) => {
    const piece = {
        id: position,
        player: 0,
        isKing: false,
        position: position,
    };

    if (value === "W") piece.isKing = true;
    if (value === "b") piece.player = 1;
    if (value === "B") {
        piece.isKing = true;
        piece.player = 1;
    }

    return piece;
};

export default function getPieces(config) {
    const pieces = config.split("").map((value, position) => {
        if (value === ".") return null;
        return configPiece(value, position);
    });

    return pieces.filter(Boolean) || [];
}
