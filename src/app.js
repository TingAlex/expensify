import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { addExpense } from "./actions/expenses";
import { setTextFilter, sortByAmount } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});
store.dispatch(
  addExpense({
    description: "Water bill",
    note: "",
    amount: 300,
    createdAt: 1000
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    note: "",
    amount: 200,
    createdAt: 1010
  })
);

store.dispatch(
  addExpense({
    description: "Gas bill",
    note: "",
    amount: 500,
    createdAt: -1000
  })
);
// store.dispatch(setTextFilter("water"));
// setTimeout(() => {
//   store.dispatch(setTextFilter("gas"));
// }, 3000);
// store.dispatch(setTextFilter("water"));
// store.dispatch(sortByAmount());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
