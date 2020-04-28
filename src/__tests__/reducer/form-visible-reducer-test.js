import formVisibleReducer from '../../reducers/form-visible-reducer'

describe("formVisibleReducer", () => {

  test("Should return the default state if no action type is enacted", () => {
    expect(formVisibleReducer(false, {type: null})).toEqual(false)
  });
  test("should toggle between current status of state", () => {
    expect(formVisibleReducer(false, { type: "TOGGLE_FORM"})).toEqual(true)
  })
});