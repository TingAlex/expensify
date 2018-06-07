import expenseReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expenseReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});
test("should not remove expense if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
test("should add an expense", () => {
  const expense = {
    description: "haha",
    note: "",
    amount: 100,
    createdAt: 0
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});
test("should edit an expense", () => {
  const updates = {
    description: "tata",
    amount: 250
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates
  };

  const state = expenseReducer(expenses, action);
  expect(state[0]).toEqual({
    ...state[0],
    ...updates
  });
});

test("should not edit an expense if id not found", () => {
  const updates = {
    description: "tata",
    amount: 250
  };
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates
  };
  const state = expenseReducer(expenses, action);
  expect(state).toEqual(expenses);
});
