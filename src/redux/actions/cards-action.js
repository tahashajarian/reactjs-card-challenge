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

export const getLocalStorage = () => {
    const localStorage = window.localStorage;
    return {
        type: 'LOCAL_STORAGE',
        payload: localStorage
    }
}
export const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
    return {
        type: 'ADD_TO_LOCALSTORAGE',
        payload: {
            key: value
        }
    }
}