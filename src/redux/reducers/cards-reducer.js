export default (state={}, {type, payload={}}) => {
    switch (type) {
        case 'LIST_CARDS':
            console.log('i called from reducers')
            return {
                ...state,
                allCards: payload.allCards
            }
    
        default:
            return {...state}
    }
}