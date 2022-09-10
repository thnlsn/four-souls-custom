export const cardDimensions = (card) => {
    console.log(card);
    return {
        height: card !== 'room' ? '251px' : '184px',
        width: card !== 'room' ? '184px' : '251px'
    }
}