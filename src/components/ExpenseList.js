import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    <h1>{props.expenses.length}</h1>
    <ol>
      {props.expenses.map(expense => (
        <li key={expense.id}>
          <ExpenseListItem {...expense} />
        </li>
      ))}
    </ol>
  </div>
);
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList);
