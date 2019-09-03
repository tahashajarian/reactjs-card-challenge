import axios from 'axios';
export const getCards = () => {
    console.log('I called')
    return dispatch => {
        axios.get('http://static.pushe.co/challenge/json', {}).then(
            data => {
                return dispatch({
                    type: 'LIST_CARDS',
                    payload: {
                        allCards: data.data.cards
                    }
                })
            }
        )
    }
}