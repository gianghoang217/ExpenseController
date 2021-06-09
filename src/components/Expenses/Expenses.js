import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import PropTypes from "prop-types";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [fileredYear, setFilteredYear] = useState('2020')
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.expenses.filter(expense => {
    return expense.expenseDate.getFullYear().toString() === fileredYear;
  })
  console.log('Check filter', filteredExpense)
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
        selected={fileredYear}
        onFilterChange={filterChangeHandler} />        
        {filteredExpense.map(expense => (
          <ExpenseItem
            key={expense.id}
            date={expense.expenseDate}
            expenseTitle={expense.expenseTitle}
            expenseAmount={expense.expenseAmount}
          />
        ))}
        ;
      </Card>
    </div>
  );
}

Expenses.propTypes = {
  expenses: PropTypes.array
};

export default Expenses;
