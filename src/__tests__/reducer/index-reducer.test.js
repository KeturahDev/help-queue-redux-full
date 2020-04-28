import rootReducer from '../../reducers/index'
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("should return default state if no actiontype is recognized", () => {
    expect(rootReducer({}, {type: null})).toEqual({
      masterTicketList: {},
      formVisibleOnPage: false
    });
  });
});