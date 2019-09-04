
import * as actions from './cards-action';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';



// test saveToLocalStorage function
describe('actions', () => {
    it('should return key : value', () => {
      const key = 'key';
      const value = 'value';
      const expectedAction = {
        type: 'ADD_TO_LOCALSTORAGE',
        key,
        value
      }
      expect(actions.saveToLocalStorage(key, value)).toEqual(expectedAction)
    })
  })

test('getLocalStorage function existed', () => {
    expect(actions.getLocalStorage()).toBeDefined(); 
})

test('getLocalStorage function return json', () => {
    expect(typeof actions.getLocalStorage()).toBe('object'); 
})

test('getCards function existed', () => {
    expect(actions.getCards()).toBeDefined(); 
})

test('get cards function handel error', async () => {
  try {
    await actions.getCards();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)
// describe('async actions get cards', () => {
//   afterEach(() => {
//     fetchMock.restore()
//   })

//   it('creates LIST_CARDS when fetching cards has been done', () => {
//     fetchMock.getOnce('http://static.pushe.co/challenge/json',{})

//     const expectedActions = [
//       { type: 'LIST_CARDS', payload: {} }
//     ]
//     const store = mockStore({cards:[]})

//     return store.dispatch(actions.getCards()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions)
//     })
//   })
// })
