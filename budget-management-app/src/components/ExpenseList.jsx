import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Type to search..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <ul className="list-group mt-3">
        {expenses
          .filter((expenseFilter) => {
            if (searchInput === "") {
              return expenseFilter;
            }

            if (
              expenseFilter.name
                .toLowerCase()
                .includes(searchInput.toLowerCase())
            ) {
              return expenseFilter;
            }
            return null;
          })
          .map((expense) => (
            <ExpenseItem
              key={expense.id}
              id={expense.id}
              name={expense.name}
              cost={expense.cost}
            />
          ))}
      </ul>
    </>
  );
};

export default ExpenseList;
