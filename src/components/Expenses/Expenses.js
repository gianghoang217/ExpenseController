import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [fileredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(expense => {
    return expense.expenseDate.getFullYear().toString() === fileredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={fileredYear}
          onFilterChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense} />
        <ExpensesList items={filteredExpense} />;
      </Card>
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array
};

export default Expenses;
