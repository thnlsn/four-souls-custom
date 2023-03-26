export const cardDimensions = (card) => {
    console.log(card);
    if (['isa', 'mom', 'bum', 'lit', 'hus', 'del',].includes(card)) {
        const increase = 1.4;
        return {
            height: `${321.75 * increase}px`,
            width: `${230 * increase}px`
        }
    }
    return {
        height: card !== 'room' ? '251px' : '184px',
        width: card !== 'room' ? '184px' : '251px'
    }
}