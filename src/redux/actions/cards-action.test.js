
import * as actions from './cards-action';




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
