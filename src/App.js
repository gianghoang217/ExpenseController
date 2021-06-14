import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense"
import React, {useState} from "react"

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 1,
      expenseDate: new Date(2020, 0, 28),
      expenseTitle: "Motorbike",
      expenseAmount: 222
    },
    {
      id: 2,
      expenseDate: new Date(2021, 2, 24),
      expenseTitle: "Book",
      expenseAmount: 555
    },
    {
      id: 3,
      expenseDate: new Date(2021, 7, 17),
      expenseTitle: "tank",
      expenseAmount: 300
    },
    {
      id: 4,
      expenseDate: new Date(2022, 2, 27),
      expenseTitle: "Bike",
      expenseAmount: 777
    },
    {
      id: 5,
      expenseDate: new Date(2019, 1, 16),
      expenseTitle: "Plant",
      expenseAmount: 888
    },
    {
      id: 6,
      expenseDate: new Date(2021, 12, 7),
      expenseTitle: "Roses",
      expenseAmount: 555
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
