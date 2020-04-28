import formVisibleReducer from '../../reducers/form-visible-reducer'

describe("formVisibleReducer", () => {
  test("Should return the default state if no action type is enacted", () => {
    expect(formVisibleReducer(false, {type:null})).toEqual(false)
  });
});