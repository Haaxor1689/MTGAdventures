export const ShufflePile = (cards: readonly string[]): string[] => {
    const size = cards.length;
    const shuffled = [...cards];
    for (let i = 0; i < size - 1; ++i) {
        const j = Math.floor(i + Math.random() * (size - i));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};
