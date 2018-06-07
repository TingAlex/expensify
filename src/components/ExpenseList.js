import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <h1>{props.expenses.length}</h1>
    {props.expenses.length === 0 ? (
      <p>No expenses</p>
    ) : (
      <ol>
        {props.expenses.map(expense => (
          <li key={expense.id}>
            <ExpenseListItem {...expense} />
          </li>
        ))}
      </ol>
    )}
  </div>
);
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
