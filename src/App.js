import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"
import React, {useState} from "react"

function App() {
  const DUMMY_EXPENSES = [
    {
      expenseDate: new Date(2020, 2, 28),
      expenseTitle: "Motorbike",
      expenseAmount: 222.7
    },
    {
      expenseDate: new Date(2021, 2, 24),
      expenseTitle: "Book",
      expenseAmount: 555
    },
    {
      expenseDate: new Date(2021, 2, 17),
      expenseTitle: "tank",
      expenseAmount: 3000
    },
    {
      expenseDate: new Date(2022, 2, 27),
      expenseTitle: "Bike",
      expenseAmount: 777
    },
    {
      expenseDate: new Date(2019, 2, 16),
      expenseTitle: "Plant",
      expenseAmount: 8888
    },
    {
      expenseDate: new Date(2021, 2, 9),
      expenseTitle: "Roses",
      expenseAmount: 5555
    }
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses = {expenses} />
    </div>
  );
}

export default App;
